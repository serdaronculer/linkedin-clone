import React from 'react'

const ProfileImg = ({width,height}) => {
  return (
    <div style={{width, height, borderRadius: '100%'}}>
        <img className='rounded-full max-w-full'  src="https://media.licdn.com/dms/image/C4D03AQFBd_4sg8fRhA/profile-displayphoto-shrink_100_100/0/1632598931998?e=1677110400&v=beta&t=ACZCvHnOxcaQiFnnK-vML07mMN7p_NmACt8Ou5x-aVE" alt="" />
    </div>
  )
}

export default ProfileImg