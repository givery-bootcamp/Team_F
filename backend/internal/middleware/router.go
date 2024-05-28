package middleware

import (
	"github.com/gin-gonic/gin"
	"myapp/internal/controllers"
)

func SetupRoutes(app *gin.Engine) {
	app.GET("/", func(ctx *gin.Context) {
		ctx.String(200, "It works")
	})
	app.GET("/hello", controllers.HelloWorld)
	app.GET("/posts/:postid", func(ctx *gin.Context) {
		ctx.String(200, "Post ID: %s", ctx.Param("postid"))
	})
}
