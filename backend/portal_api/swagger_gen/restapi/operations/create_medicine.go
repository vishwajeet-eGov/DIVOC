// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"net/http"

	"github.com/go-openapi/runtime/middleware"

	"github.com/divoc/portal-api/swagger_gen/models"
)

// CreateMedicineHandlerFunc turns a function with the right signature into a create medicine handler
type CreateMedicineHandlerFunc func(CreateMedicineParams, *models.JWTClaimBody) middleware.Responder

// Handle executing the request and returning a response
func (fn CreateMedicineHandlerFunc) Handle(params CreateMedicineParams, principal *models.JWTClaimBody) middleware.Responder {
	return fn(params, principal)
}

// CreateMedicineHandler interface for that can handle valid create medicine params
type CreateMedicineHandler interface {
	Handle(CreateMedicineParams, *models.JWTClaimBody) middleware.Responder
}

// NewCreateMedicine creates a new http.Handler for the create medicine operation
func NewCreateMedicine(ctx *middleware.Context, handler CreateMedicineHandler) *CreateMedicine {
	return &CreateMedicine{Context: ctx, Handler: handler}
}

/*CreateMedicine swagger:route POST /medicines createMedicine

Create Medicine

*/
type CreateMedicine struct {
	Context *middleware.Context
	Handler CreateMedicineHandler
}

func (o *CreateMedicine) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		r = rCtx
	}
	var Params = NewCreateMedicineParams()

	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		r = aCtx
	}
	var principal *models.JWTClaimBody
	if uprinc != nil {
		principal = uprinc.(*models.JWTClaimBody) // this is really a models.JWTClaimBody, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request

	o.Context.Respond(rw, r, route.Produces, route, res)

}
