package controllers

import (
	"errors"
	"myapp/internal/repositories"
	"myapp/internal/usecases"

	"github.com/gin-gonic/gin"
)

func PostsController(ctx *gin.Context) {
	repository := repositories.NewPostsRepository(DB(ctx))
	usecase := usecases.NewPostsUsecase(repository)
	result, err := usecase.Execute()
	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		ctx.JSON(200, result)
	} else {
		handleError(ctx, 404, errors.New("Not found"))
	}
}
