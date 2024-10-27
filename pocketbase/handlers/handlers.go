package handlers

import (
	"myapp/config"
	"net/http"

	"github.com/pocketbase/pocketbase/core"
)

func Init (env config.Env) {
	env.PocketBase.OnServe().BindFunc(func(se *core.ServeEvent) error {
    se.Router.GET("/hello/{name}", func(e *core.RequestEvent) error {
        name := e.Request.PathValue("name")

        return e.JSON(http.StatusOK, map[string]string{
            "message": "Hello " + name,
        })
    })

    return se.Next()
})

}