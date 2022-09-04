export default function Image(props) {
  return(
    <div className="rounded-t-xl truncate">
      <img src={props.url} alt="image" aria-hidden="true" className="max-w-full"/>
    </div>
  )
};
