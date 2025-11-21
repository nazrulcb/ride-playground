import Link from 'next/link';
import React from 'react'

function bookSchedule() {
  return (
    <>
       <section className='class_schedule_detail_main_area'>
            <div className='close_icon'><Link href={'/class-schedule'}><img src="../images/close.png" alt='img' /></Link></div>
            <div className='class_schedule_detail_main_inner'>
                <div className='class_schedule_detail_left'>
                    <img src="../images/class_detail_img.png" alt='img' />
                </div>
                <div className='class_schedule_detail_right'>
                    <h2>RIDE 45 (All levels)</h2>
                    <h3><img src='../images/trainer.png' alt='img' /> Instructor : <span>Tyson</span></h3>
                    <div className='dt_tm_addrs'>
                       <p><img src='../images/calendar.png' alt='img' /> Thu 31st October 2025</p>
                       <p><img src='../images/clock.png' alt='img' /> 7:00 AM (45mins)</p>
                       <p><img src='../images/map.png' alt='img' /> Melbourns CBD Ride Chamber</p>
                    </div>
                    <div className='overview_area'>
                      <h3>Overview</h3>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It  has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at  Hampden-Sydney College in Virginia, looked up one of the more obscure  Latin words, consectetur, from a Lorem Ipsum passage, and going through  the cites of the word in classical literature, discovered the  undoubtable source.</p>
                    </div>
                    <div className='booking_area'>
                      <h3>Single click booking now</h3>
                      <p>Click on one of the spots below to instantly book into the class</p>
                    </div>
                    <div className='slot_available'>
                       <h3>Available Slot</h3>
                       <h4>150</h4>
                    </div>

                    <button className='booknow_btn'>BOOK NOW</button>
                </div>
                
            </div>
       </section>
    </>
  )
}

export default bookSchedule;
