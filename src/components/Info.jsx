export default function Info(props) {
  return (
    <div className="text-center">
      <h1 class="text-3xl font-bold">{props.name}</h1>
      <h3 class="text-lg text-ly mb-1">{props.job}</h3>
      <p className="text-xs">{props.email}</p>
    </div>
  )
}