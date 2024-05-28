package interfaces

import (
	"myapp/internal/entities"
)

type PostsRepository interface {
	List() ([]*entities.Post, error)
	Get() (*entities.Post, error)
}
