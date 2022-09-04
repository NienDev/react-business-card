export default function Button() {
  return (
    <div className="flex items-center justify-between mt-6 mb-12">
      <button className="flex items-center justify-center  rounded-xl px-8 py-2 mr-4 bg-white text-black">
        <i class="fa-solid fa-envelope mr-4"></i>
        <div>Email</div>
      </button>
      <button className="flex items-center justify-center  rounded-xl px-6 py-2 bg-blue text-white">
        <i class="fa-brands fa-linkedin mr-4"></i>
        <div>Linkedln</div>
      </button>
    </div>
  )
}
