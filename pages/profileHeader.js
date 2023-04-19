export default function PHeader(props){
    return(
    <div classname = "bg-green-300 max-w-7xl m-auto p-3">
      <div classname = "flex items-center justify-between">
      <div className='justify-center flex items-center mt-20 mr-10  rounded-full' >
        <img
          alt=''
          src='https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png'
          width={150}
          height={150}
        />

        <div className='ml-5'>
          <div>profile</div>
          <div className='text-6xl font-extrabold'>{props.data}</div>
          <div className='flex items-center mt-5'>
            <p>
              <span className='text-bold'>1 public playlist</span> • 1 follower  • 1 following
            </p>
          </div>
        </div>
      </div>

      </div>
      </div>
    )
}