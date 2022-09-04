export default function Section(props) {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold mb-2">{props.title}</h1>
      <p className="text-sm font-light">{props.content}</p>
    </div>
  )
}