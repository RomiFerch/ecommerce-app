import React from 'react';
import './stylesForm.css'


function Register() {
  return (

<>
<section>
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registrate</h3>
            <form>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" className="form-control form-control-lg" />
                    <label className="form-label" for="firstName">Nombre</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" className="form-control form-control-lg" />
                    <label className="form-label" for="lastName">Apellido</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input type="date" className="form-control form-control-lg" id="birthdayDate" />
                    <label for="birthdayDate" className="form-label">Fecha de Nacimiento</label>
                  </div>

                </div>
                
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" id="emailAddress" className="form-control form-control-lg" />
                    <label className="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="password" id="password" className="form-control form-control-lg" />
                    <label className="form-label" for="password">Contraseña</label>
                  </div>

                </div>
              </div>

              <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Subscribirme al newlestter</h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="newlestter_si"
                      value="option1" checked />
                    <label className="form-check-label" for="newlestter_si">Si</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="newlestter_no">No</label>
                  </div>

                </div>

              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  </>
  )  
}

export default Register;