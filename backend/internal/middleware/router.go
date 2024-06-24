package middleware

import (
	"myapp/internal/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(app *gin.Engine) {
	app.GET("/", func(ctx *gin.Context) {
		ctx.String(200, "It works")
	})
	authRequeried := app.Group("/")
	authRequeried.Use(SigninCheck())
	app.GET("/hello", controllers.HelloWorld)

	authRequeried.GET("/posts", controllers.PostsController)
	authRequeried.GET("/posts/:postid", controllers.PostDetailController)

	app.POST("/signin", controllers.SigninController)
	app.POST("/signout", controllers.SignoutController)
	authRequeried.GET("/user", controllers.UserController)

	authRequeried.POST("/comments", controllers.CreateCommentController)
	authRequeried.PUT("/comments/:commentId", controllers.UpdateCommentController)
	authRequeried.DELETE("/comments/:commentId", controllers.DeleteCommentController)
}
