"use client"
import React, { useState, useEffect, use } from 'react'
import Script from 'next/script'
// import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })
    const [currentuser, setCurrentuser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const isDisabled = paymentform.name.length < 3 || paymentform.message.length < 2;
    const router = useRouter()

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = useCallback(async () => {
        let u = await fetchuser(username)
        setCurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }, [username])

    const pay = async (amount) => {
        //get the order id
        let a = await initiate(amount, username, paymentform)
        let orderid = a.id
        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            },


        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    useEffect(() => {
        getData()
    }, [getData])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast.success('Thanks for your Donation', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        }
        router.push(`/${username}`)


    }, [router, searchParams, username])


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>




            <div className='cover w-full bg-red-50 relative'>
                <Image className='object-cover w-full md:h-[350px]' src={currentuser.coverpic} alt="coverpic" />
                <div className='absolute profile-center bottom-[-3rem] overflow-hidden'>
                    <Image width={100} height={100} className='rounded-3xl border-4 border-red-300 object-cover size-28' src={currentuser.profilepic} alt="profilepic" />
                </div>
            </div>
            <div className='info flex flex-col justify-center items-center gap-3 my-16'>
                <div className='text-4xl max-md:text-3xl font-bold'>{username}</div>
                <div>Lets help {currentuser.name} get a chai!</div>
                <div>{payments.length} Donations . ₹{payments.reduce((a, b) => a + b.amount, 0)} raised!</div>

                <div className="payment flex max-lg:flex-col gap-3 w-[90%]">
                    <div className="supporters lg:w-1/2 bg-slate-900 rounded-xl p-8">
                        <h2 className='text-2xl font-bold'>Top 10 Supporters</h2>
                        <ul className='mx-4 my-2'>
                            {payments.length == 0 && <li>No Payments yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-2' > {p.name} donated < span className='font-bold' >₹{p.amount}</span> with a message: &quot;{p.message}&quot;</li>
                            })}

                        </ul>
                    </div>

                    <div className="makePayment lg:w-1/2 bg-slate-900 rounded-xl p-8">
                        <h2 className='text-2x1 font-bold my-5'>Make a Payment</h2>
                        <div className='flex flex-col gap-2'>
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-1g bg-slate-800' placeholder='Enter Name' />

                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-1g bg-slate-800' placeholder='Enter Message' />

                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-1g bg-slate-800' placeholder='Enter Amount' />

                            <button onClick={() => { pay(Number.parseInt(paymentform.amount * 100)) }} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-slate-200 disabled:bg-slate-600" disabled={isDisabled || paymentform.amount.length < 1} >Pay</button>
                        </div>

                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-1g disabled:text-slate-600' disabled={isDisabled} onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-1g disabled:text-slate-600' disabled={isDisabled} onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-1g disabled:text-slate-600' disabled={isDisabled} onClick={() => pay(3000)}>Pay ₹30</button>

                        </div>



                    </div>
                </div >
            </div >
        </>
    )
}

export default PaymentPage