import Avatar from '../../assets/avatar.svg'
import Input from '../../components/Input'

const Dashboard = () => {
  const contacts = [
    {
      name: 'Nalin',
      status: 'Available',
      img: Avatar
    },
    {
      name: 'Gaurav',
      status: 'Available',
      img: Avatar
    },
    {
      name: 'Dev',
      status: 'Available',
      img: Avatar
    },
    {
      name: 'Ram',
      status: 'Available',
      img: Avatar
    },
    {
      name: 'Akshay',
      status: 'Available',
      img: Avatar
    },
  ]
  return (
    <div className='w-screen flex'>
         <div className='w-[25%] h-screen bg-secondary'>
          <div className='flex items-center my-8 mx-10'>
            <div className='border border-primary p-[2px] rounded-full'><img src={Avatar} width={50} height={50} alt="user_profile"/></div>
              <div  className='ml-8'>
                <h3 className='text-2xl'>Shreyansh</h3>
                <p className='text-lg font-light'>My Account</p>
              </div>
          </div>
          <hr/>
          <div className='mx-10 mt-5'>
              <div className='text-primary text-lg'>Messages</div>
              <div>
                {
                    contacts.map(({name, status, img}) => {
                      return(
                        <div className='flex items-center py-6 border-b border-b-gray-300'>
                          <div className='cursor-pointer flex items-center'>
                            <div><img src={img} width={40} height={40} alt="user_profile"/></div>
                              <div  className='ml-6'>
                                <h3 className='text-md font-semibold'>{name}</h3>
                                <p className='text-sm font-light text-gray-600'>{status}</p>
                              </div>
                            </div>
                          </div>
                      )
                    })
                }
              </div>
          </div>
         </div>
         <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
            <div className='w-[75%] bg-secondary h-[60px] my-14 rounded-full flex items-center px-14 shadow-lg'>
                      <div className='cursor-pointer'><img src={Avatar} width={40} height={40} alt=""/></div>
                      <div className='ml-6 mr-auto'>
                         <h3 className='text-md'>Papa</h3>
                         <p className='text-sm font-light text-gray-600'>online</p>
                      </div>
                      <div className='cursor-pointer'>
                       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" 
                       width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" 
                       stroke-linecap="round" stroke-linejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                       <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                       <path d="M15 9l5 -5" />
                       <path d="M16 4l4 0l0 4" />
                       </svg>
                      </div>
            </div>
            <div className='h-[75%] w-full overflow-y-scroll shadow-sm'>
              <div className='p-14'>
                <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                  lorem is the when the of the with the for the that is why is the.
                </div>
                <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                  lorem is the when the of the.
                </div>
                <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                  lorem is the when the of the with the for the that is why is the.
                </div>
                <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                  lorem is the when the of the.
                </div>
                <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                  lorem is the when the of the with the for the that is why is the.
                </div>
                <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                  lorem is the when the of the.
                </div>
                <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                  lorem is the when the of the with the for the that is why is the.
                </div>
                <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                  lorem is the when the of the.
                </div>
              </div>
            </div>
            <div className='p-10 w-full flex items-center'>
               <Input placeholder='Type a message...' className='w-[75%]' 
               inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
               <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
                 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                 <path d="M10 14l11 -11" />
                 <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                 </svg>
               </div>
               <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
                 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                 <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                 <path d="M9 12h6" />
                 <path d="M12 9v6" />
                 </svg>
               </div>
            </div>
         </div>
         <div className='w-[25%] h-screen bg-light'>

         </div>
    </div>
  )
}

export default Dashboard