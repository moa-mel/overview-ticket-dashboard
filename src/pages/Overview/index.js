import React from 'react'
import Sidebar from '../../components/Sidebar'
import search from "../../images/search.png"
import notification from "../../images/new.png"
import plus from "../../images/inactive.png"
import avatar from "../../images/photo.png"
import './styles.css'
import { PartData } from '../../Dummydata'
import circle from "../../images/circle.png"
import active from "../../images/active.png"
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const Overview = ({sidebarOpen, openSidebar}) => {
    return (
        <div className='over ' >
            <div className='over-left'>
                <Sidebar />
            </div>
            <div className=' over-right' >
                {/* header */}
                <div className='over-head'>
                    <p className='alex'>Overview</p>
                    <div className='oh-icon'>
                        <img src={search} alt='' className='oh-icn' />
                        <img src={notification} alt='' className='oh-icn2' />
                        <p className='oi-line'></p>
                        <div className='oh-avatar'>
                            <p>Jone Fedinard</p>
                            <img src={avatar} alt='' className='oh-img' />
                        </div>
                    </div>
                </div>
                {/* top */}
                <div className='over-top'>
                    <div className='klm'>
                    <div className='ot-1'>
                        <div className='otu-1'>
                            <p className='ot-up1'>Unsolved</p>
                            <p className='ot-p'>60</p>
                        </div>
                    </div>
                    <div className='ot-1'>
                        <div className='otu-2'>
                            <p className='ot-up1'>Overdue</p>
                            <p className='ot-p'>16</p>
                        </div>
                    </div>
                    </div>
                    <div className='asdf'>
                    <div className='ot-1'>
                        <div className='otu-3'>
                            <p className='ot-up1'>Open</p>
                            <p className='ot-p9'>43</p>
                        </div>
                    </div>
                    <div className='ot-1'>
                        <div className='otu-4'>
                            <p className='ot-up1'>On hold</p>
                            <p className='ot-p'>64</p>
                        </div>
                    </div>
                </div>
                </div>
                {/* middle */}
                <div className='over-mid'>
                    <div className='om-main'>
                        <div className='over-chart'>
                            <p>Today’s trends</p>
                            <div className='oc-hj'>
                                <p>as of 25 May 2019, 09:41 PM</p>
                                <div className='uilocn'>
                                    <p><span className='uiloc-sp1'>--</span>Today</p>
                                    <p><span className='uiloc-sp1'>--</span>Yesterday</p>
                                </div>
                            </div>
                            {/* <Chart data={PartData} dataKey="fig" /> */}
                            < ResponsiveContainer width="100%" aspect={4 / 3}>
                                <LineChart
                                    data={PartData}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip />
                                    <Line type="monotone" dataKey="pv" fill="#EBD579" />
                                    <Line type="monotone" dataKey="uv" fill="#DFE0EB" />
                                </LineChart>
                            </ResponsiveContainer>

                        </div>
                        <p className='overm-sp'></p>
                        <div className='jrkvn'>
                            <div className='omm-1'>
                                <p className='omm1-p1'>Resolved</p>
                                <p className='omm1-p2'>449</p>
                            </div>
                            <p className='overm-sp1'></p>
                            <div className='omm-2'>
                                <p className='omm2-p1'>Received</p>
                                <p className='omm2-p2'>426</p>
                            </div>
                            <p className='overm-sp2'></p>
                            <div className='omm-3'>
                                <p className='omm3-p1'>Average first response time</p>
                                <p className='omm3-p2'>33m</p>
                            </div>
                            <p className='overm-sp3'></p>
                            <div className='omm-4'>
                                <p className='omm4-p1'>Average response time</p>
                                <p className='omm4-p2'>3h 8m</p>
                            </div>
                            <p className='overm-sp4'></p>
                            <div className='omm-5'>
                                <p className='omm5-p1'>Resolution within SLA</p>
                                <p className='omm5-p2'>94%</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* down */}
                <div className='ov-down'>
                    <div className='od-left'>
                        <div className='odl-1'>
                            <p className='odl1-p1'> Unresolved tickets</p>
                            <p className='odl1-p2'>View details</p>
                        </div>
                        <p className='odl-p'><span>Group</span> Support</p>
                        <div className='odl-2'>
                            <p className='odl2-p1'>Waiting on Feature Request</p>
                            <p className='odl2-p2'>4238</p>
                        </div>
                        <p className='odl-sp1'></p>
                        <div className='odl-3'>
                            <p className='odl3-p1'>Awaiting Customer Response</p>
                            <p className='odl3-p2'>1005</p>
                        </div>
                        <p className='odl-sp2'></p>
                        <div className='odl-4'>
                            <p className='odl4-p1'>Awaiting Developer Fix</p>
                            <p className='odl4-p2'>914</p>
                        </div>
                        <p className='odl-sp3'></p>
                        <div className='odl-5'>
                            <p className='odl5-p1'>Pending</p>
                            <p className='odl5-p2'>281</p>
                        </div>
                    </div>
                    <div className='od-right'>
                        <div className='odr-1'>
                            <p className='odlr-p1'> Tickets</p>
                            <p className='odlr-p2'>View details</p>
                        </div>
                        <p className='odr-p'> Today</p>
                        <div className='odr-2'>
                            <p className='odr2-p'> Create new task</p>
                            <img src={plus} alt='' className='odr2-img' />
                        </div>
                        <p className='odr-sp1'></p>
                        <div className='odr-3'>
                            <div className='odr3-d1'>
                                <img src={circle} alt='' className='odr3-img' />
                                <p>Finish ticket update</p>
                            </div>
                            <div className='odr3-d2'>
                                <p>URGENT</p>
                            </div>
                        </div>
                        <p className='odr-sp2'></p>
                        <div className='odr-4'>
                            <div className='odr4-d1'>
                                <img src={circle} alt='' className='odr4-img' />
                                <p>Create new ticket example</p>
                            </div>
                            <div className='odr4-d2'>
                                <p>NEW</p>
                            </div>
                        </div>
                        <p className='odr-sp3'></p>
                        <div className='odr-5'>
                            <div className='odr5-d1'>
                                <img src={active} alt='' className='odr5-img' />
                                <p>Update ticket report</p>
                            </div>
                            <div className='odr5-d2'>
                                <p>DEFAULT</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview