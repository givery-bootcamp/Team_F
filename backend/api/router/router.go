package router

import (
	"myapp/api/controller"
	"myapp/api/middleware"
	"myapp/api/schema"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/samber/do"
	"github.com/swaggest/openapi-go"
	"github.com/swaggest/openapi-go/openapi3"
)

func SetupRoutes(i *do.Injector, app *gin.Engine) error {
	// 依存するControllerの依存関係の取得
	postController := do.MustInvoke[*controller.PostController](i)
	authController := do.MustInvoke[*controller.AuthController](i)

	// OpenAPIの依存関係の取得
	appDoc := do.MustInvoke[*openapi3.Reflector](i)

	// OpenAPIの基本定義を設定
	appDoc.Spec = &openapi3.Spec{Openapi: "3.0.3"}
	appDoc.Spec.Info.
		WithTitle("Web開発研修6班 API").
		WithVersion("1.0.0").
		WithDescription("FY24卒Web開発研修6班のAPI仕様書です")

	app.Use(middleware.CorsMiddleware())
	// HealthCheckOpe / GET
	app.GET("/", func(ctx *gin.Context) {
		ctx.String(200, "It works")
	})
	healthCheckOpe, _ := appDoc.NewOperationContext(http.MethodGet, "/")
	healthCheckOpe.SetID("healthCheck")
	healthCheckOpe.SetSummary("APIのセルフチェック")
	healthCheckOpe.SetTags("operation")
	appDoc.AddOperation(healthCheckOpe)

	// listPostsOpe /posts GET
	app.GET("/posts", postController.ListPost)
	listPostsOpe, _ := appDoc.NewOperationContext(http.MethodGet, "/posts")
	listPostsOpe.SetID("listPosts")
	listPostsOpe.SetSummary("投稿の一覧を取得")
	listPostsOpe.SetTags("post")
	listPostsOpe.AddRespStructure(new([]schema.PostResponse), openapi.WithHTTPStatus(http.StatusAccepted))
	appDoc.AddOperation(listPostsOpe)

	// getPostOpe /posts/{id} GET
	app.GET("/posts/:postid", postController.GetPost)
	getPostOpe, _ := appDoc.NewOperationContext(http.MethodGet, "posts/{id}")
	getPostOpe.SetID("getPost")
	getPostOpe.SetSummary("投稿をIDから取得")
	getPostOpe.SetTags("post")
	getPostOpe.AddRespStructure(new(schema.PostResponse), openapi.WithHTTPStatus(http.StatusAccepted))
	appDoc.AddOperation(getPostOpe)

	// signInOpe /signin POST
	app.POST("/signin", authController.SignIn)
	signInOpe, _ := appDoc.NewOperationContext(http.MethodPost, "/signin")
	signInOpe.SetID("signIn")
	signInOpe.SetSummary("ユーザのログインを実行")
	signInOpe.SetTags("auth")
	signInOpe.AddReqStructure(new(schema.LoginRequest))
	signInOpe.AddRespStructure(new(schema.UserResponse), openapi.WithHTTPStatus(http.StatusAccepted))
	appDoc.AddOperation(signInOpe)

	// signOutOpe /signout POST
	app.POST("/signout", authController.SignOut)
	signOutOpe, _ := appDoc.NewOperationContext(http.MethodPost, "/signout")
	signOutOpe.SetID("signOut")
	signOutOpe.SetTags("auth")
	signOutOpe.SetSummary("ユーザのログアウトを実行")
	appDoc.AddOperation(signOutOpe)

	// getCurrentUserOpe /user GET
	app.GET("/user", authController.GetCurrentUser)
	getCurrentUserOpe, _ := appDoc.NewOperationContext(http.MethodGet, "/user")
	getCurrentUserOpe.SetID("getCurrentUser")
	getCurrentUserOpe.SetSummary("現在ログインしているユーザを取得")
	getCurrentUserOpe.SetTags("auth")
	getCurrentUserOpe.AddRespStructure(new(schema.UserResponse), openapi.WithHTTPStatus(http.StatusAccepted))
	appDoc.AddOperation(getCurrentUserOpe)

	return nil
}

func NewAppDoc(i *do.Injector) (*openapi3.Reflector, error) {
	return openapi3.NewReflector(), nil
}
