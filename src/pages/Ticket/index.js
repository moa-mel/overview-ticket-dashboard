import React from 'react'
import Sidebar from '../../components/Sidebar'
import search from "../../images/search.png"
import notification from "../../images/new.png"
import avatar from "../../images/photo.png"
import './styles.css'
import arrl from "../../images/arrow - left.png"
import arrr from "../../images/arrow - right.png"
import dot from "../../images/more - vertical.png"
import sort from "../../images/sort.png"
import filter from "../../images/filter.png"
import dropd from "../../images/dropdown.png"
import imgg1 from "../../images/3.png"
import imgg2 from "../../images/4.png"
import imgg3 from "../../images/5.png"
import imgg4 from "../../images/6.png"
import imgg5 from "../../images/7.png"
import imgg6 from "../../images/5 2.png"
import imgg7 from "../../images/6 2.png"
import imgg8 from "../../images/7 2.png"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from '@chakra-ui/react'



const Ticket = () => {
    return (
        <div className='ticket' >
            <div className='tick-left'>
                <Sidebar />
            </div>
            <div className='tick-right'>
                {/* header */}
                <div>
                    <div className='tick-head'>
                        <p className='fire'>Ticket</p>
                        <div className='tick-icon'>
                            <img src={search} alt='' className='tick-icn' />
                            <img src={notification} alt='' className='tick-icn2' />
                            <p className='tick-line'></p>
                            <div className='tick-avatar'>
                                <p>Jone Fedinard</p>
                                <img src={avatar} alt='' className='tick-img' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* main */}
                <div className='tick-main'>
                    <div className='tm-up'>
                        <p>All tickets</p>
                        <div className='tmu-left'>
                            <div className='tmul1'>
                                <img src={sort} alt='' className='tm-img1' />
                                <p>Sort</p>
                            </div>
                            <div className='tmul2'>
                                <img src={filter} alt='' className='tm-img2' />
                                <p>Filter</p>
                            </div>
                        </div>
                    </div>
                    <div className='tm-mid'>
                        <TableContainer>
                            <Table variant='simple' size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Ticket Details</Th>
                                        <Th>Customer name</Th>
                                        <Th>Date</Th>
                                        <Th>Priority</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <div className='td1-1'>
                                                <img src={imgg1} alt='' className='td-img1' />
                                                <div className='td1-2'>
                                                    <p className='td12-p1'>Contact Email not Linked</p>
                                                    <p className='td12-p2'>Updated 1 day ago</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div>
                                                <p className='td12-p1'>Tom Cruise</p>
                                                <p className='td12-p2'>on 24.05.2019</p>
                                            </div>
                                        </Td>
                                        <Td >
                                            <div className='td-date'>
                                                <p className='td12-p1'>May 26, 2019</p>
                                                <p className='td12-p2'>7:30 AM</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='jkld'>
                                                <div className='rd-p'>
                                                    <p>HIGH</p>
                                                </div>
                                                <img src={dot} alt='' className=''/>
                                            </div>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <div className='td1-1'>
                                                <img src={imgg2} alt='' className='td-img1' />
                                                <div className='td1-2'>
                                                    <p className='td12-p1'>Adding Images to Featured Posts</p>
                                                    <p className='td12-p2'>Updated 1 day ago</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div>
                                                <p className='td12-p1'>Matt Damon</p>
                                                <p className='td12-p2'>on 24.05.2019</p>
                                            </div>
                                        </Td>
                                        <Td >
                                            <div className='td-date'>
                                                <p className='td12-p1'>May 26, 2019</p>
                                                <p className='td12-p2'>7:00 AM</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='jkld'>
                                                <div className='rd-p2'>
                                                    <p>LOW</p>
                                                </div>
                                                <img src={dot} alt='' className=''/>
                                            </div>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <div className='td1-1'>
                                                <img src={imgg3} alt='' className='td-img1' />
                                                <div className='td1-2'>
                                                    <p className='td12-p1'>When will I be charged this month?</p>
                                                    <p className='td12-p2'>Updated 1 day ago</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div>
                                                <p className='td12-p1'>Robert Downey</p>
                                                <p className='td12-p2'>on 24.05.2019</p>
                                            </div>
                                        </Td>
                                        <Td >
                                            <div className='td-date'>
                                                <p className='td12-p1'>May 26, 2019</p>
                                                <p className='td12-p2'>7:30 AM</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='jkld'>
                                                <div className='rd-p'>
                                                    <p>HIGH</p>
                                                </div>
                                                <img src={dot} alt='' className=''/>
                                            </div>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <div className='td1-1'>
                                                <img src={imgg4} alt='' className='td-img1' />
                                                <div className='td1-2'>
                                                    <p className='td12-p1'>Payment not going through</p>
                                                    <p className='td12-p2'>Updated 1 day ago</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div>
                                                <p className='td12-p1'>Christian Bale</p>
                                                <p className='td12-p2'>on 24.05.2019</p>
                                            </div>
                                        </Td>
                                        <Td >
                                            <div className='td-date'>
                                                <p className='td12-p1'>May 26, 2019</p>
                                                <p className='td12-p2'>5:00 pm</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='jklk'>
                                                <div className='rd-p3'>
                                                    <p>NORMAL</p>
                                                </div>
                                                <img src={dot} alt='' className=''/>
                                            </div>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <div className='td1-1'>
                                                <img src={imgg5} alt='' className='td-img1' />
                                                <div className='td1-2'>
                                                    <p className='td12-p1'>Unable to add replies</p>
                                                    <p className='td12-p2'>Updated 1 day ago</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div>
                                                <p className='td12-p1'>Henry Cavil</p>
                                                <p className='td12-p2'>on 24.05.2019</p>
                                            </div>
                                        </Td>
                                        <Td >
                                            <div className='td-date'>
                                                <p className='td12-p1'>May 26, 2019</p>
                                                <p className='td12-p2'>4:00 PM</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='jkld'>
                                                <div className='rd-p'>
                                                    <p>HIGH</p>
                                                </div>
                                                <img src={dot} alt='' className=''/>
                                            </div>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <div className='td1-1'>
                                                <img src={imgg6} alt='' className='td-img1' />
                                                <div className='td1-2'>
                                                    <p className='td12-p1'>Downtime since last week</p>
                                                    <p className='td12-p2'>Updated 3 days ago</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div>
                                                <p className='td12-p1'>Chris Evans</p>
                                                <p className='td12-p2'>on 24.05.2019</p>
                                            </div>
                                        </Td>
                                        <Td >
                                            <div className='td-date'>
                                                <p className='td12-p1'>May 26, 2019</p>
                                                <p className='td12-p2'>2:00 PM</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='jklk'>
                                                <div className='rd-p3'>
                                                    <p>MORMAL</p>
                                                </div>
                                                <img src={dot} alt='' className=''/>
                                            </div>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <div className='td1-1'>
                                                <img src={imgg7} alt='' className='td-img1' />
                                                <div className='td1-2'>
                                                    <p className='td12-p1'>Referral Bonus</p>
                                                    <p className='td12-p2'>Updated 4 days ago</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div>
                                                <p className='td12-p1'>Sam Smith</p>
                                                <p className='td12-p2'>on 24.05.2019</p>
                                            </div>
                                        </Td>
                                        <Td >
                                            <div className='td-date'>
                                                <p className='td12-p1'>May 26, 2019</p>
                                                <p className='td12-p2'>11:30 AM</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='jkld'>
                                                <div className='rd-p2'>
                                                    <p>LOW</p>
                                                </div>
                                                <img src={dot} alt='' className=''/>
                                            </div>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <div className='td1-1'>
                                                <img src={imgg8} alt='' className='td-img1' />
                                                <div className='td1-2'>
                                                    <p className='td12-p1'>How do I change my password?</p>
                                                    <p className='td12-p2'>Updated 6 days ago</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div>
                                                <p className='td12-p1'>Steve Rogers</p>
                                                <p className='td12-p2'>on 24.05.2019</p>
                                            </div>
                                        </Td>
                                        <Td >
                                            <div className='td-date'>
                                                <p className='td12-p1'>May 26, 2019</p>
                                                <p className='td12-p2'>1:00 PM</p>
                                            </div>
                                        </Td>
                                        <Td>
                                            <div className='jklk'>
                                                <div className='rd-p3'>
                                                    <p>NORMAL</p>
                                                </div>
                                                <img src={dot} alt='' className=''/>
                                            </div>
                                        </Td>
                                    </Tr>

                                </Tbody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='tm-down'>
                        <div className='tmd-1'>
                            <p>Rows per page:</p>
                            <div className='tmdd'>
                                <p>8</p>
                                <img src={dropd} alt='' className='tmd-img1' />
                            </div>
                        </div>
                        <div className='tmd-2'>
                            <p>1-8 of 1240</p>
                            <div className='tmdd2'>
                                <img src={arrl} alt='' className='tmd-img2' />
                                <img src={arrr} alt='' className='tmd-img3' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Ticket