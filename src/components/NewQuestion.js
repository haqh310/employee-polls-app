import {connect} from "react-redux";
import { useState } from "react";
import { handleCreateQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestion = ({dispatch}) => {
  const [options, setOptions] = useState({
    optionOneText: "",
    optionTwoText: ""
  })

  const navigate = useNavigate()

  const disabledBtn = () => {
    return options.optionOneText.length > 0 && options.optionTwoText.length > 0
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target

    setOptions({...options, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(handleCreateQuestion(options))
    navigate("/")
  }

  return (
    <div className="container row my-4">
      <div className="d-flex justify-content-center my-4">
        <div className="col-6 text-center">
          <h3 data-testid="heading">Would You Rather</h3>
          <p>Create Your Own Poll</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group py-2">
              <label className="text-bold py-1">First Option</label>
              <input id="optionOne" data-testid="optionOne" type="text" className="form-control" name="optionOneText" value={options.optionOneText} placeholder="Option One" onChange={handleOnChange}/>
            </div>
            <div className="form-group py-2">
                <label  className="text-bold py-1">First Option</label>
                <input id="optionTwo" data-testid="optionTwo" type="text" className="form-control" name="optionTwoText" value={options.optionTwoText} placeholder="Option Two" onChange={handleOnChange}/>
            </div>
            <button data-testid="btnSubmit" className="btn btn-success" type="submit" disabled={!disabledBtn()}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({authedUser}) => ({
    authedUser: authedUser
  })

export default connect(mapStateToProps)(NewQuestion);