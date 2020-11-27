// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/divoc/portal-api/swagger_gen/models"
)

// GetProgramsOKCode is the HTTP code returned for type GetProgramsOK
const GetProgramsOKCode int = 200

/*GetProgramsOK OK

swagger:response getProgramsOK
*/
type GetProgramsOK struct {

	/*
	  In: Body
	*/
	Payload []*models.Program `json:"body,omitempty"`
}

// NewGetProgramsOK creates GetProgramsOK with default headers values
func NewGetProgramsOK() *GetProgramsOK {

	return &GetProgramsOK{}
}

// WithPayload adds the payload to the get programs o k response
func (o *GetProgramsOK) WithPayload(payload []*models.Program) *GetProgramsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get programs o k response
func (o *GetProgramsOK) SetPayload(payload []*models.Program) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetProgramsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty array
		payload = make([]*models.Program, 0, 50)
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}
