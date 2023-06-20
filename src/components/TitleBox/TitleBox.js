import './TitleBox.scss'

export default function TitleBox(props) {
  const { updateHandler } = props;
  return (
    <div className="app__title-box">
      <h1 className="app__title">Notes</h1>
      <button onClick={updateHandler} className="app__btn"><span className="update"></span></button>
    </div>
  )
}