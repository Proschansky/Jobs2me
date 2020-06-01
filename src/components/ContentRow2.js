import React from 'react'
import MyAreaChart from './MyAreaChart'
import MyPieChart from './MyPieChart'

export default function ContentRow2() {
    const [toggleDropdown1, setToggleDropDown1] = React.useState(0)
    const display1 = toggleDropdown1 ? "show": null
    const [toggleDropdown2, setToggleDropDown2] = React.useState(0)
    const display2 = toggleDropdown2 ? "show": null
    return (
        <div className="row">

        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
              <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>setToggleDropDown1(!toggleDropdown1)}>
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className={`dropdown-menu dropdown-menu-right shadow animated--fade-in ${display1}`} aria-labelledby="dropdownMenuLink">
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="chart-area">
                <MyAreaChart />
              </div>
            </div>
          </div>
        </div>


        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
              <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>setToggleDropDown2(!toggleDropdown2)}>
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className={`dropdown-menu dropdown-menu-right shadow animated--fade-in ${display2}`}  aria-labelledby="dropdownMenuLink">
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
           
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <MyPieChart />
              </div>
              <div className="mt-4 text-center small">
                <span className="mr-2">
                  <i className="fas fa-circle text-primary"></i> Direct
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-success"></i> Social
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-info"></i> Referral
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

