import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
function Contact() {
    const sendMail = (e) => {
        e.preventDefault();
        // emailjs.sendForm(service_id, template_id, e.target, public_key)
        emailjs.sendForm("service_yxdq2bb", "template_tk3zvfh", e.target, "hC6YwvD6VC7lp6rf8")
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Email Sent Successfully',
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(err => console.log(err.text))
    }
    return ( 
        <>
            <header className="container my-5 mx-auto w-50 rounded-2 text-light text-center py-3">
                <h2>Contact Us</h2>
            </header>

            <section className="my-5">
                <div className="container my-3 w-50 mx-auto">
                    <form onSubmit={sendMail}>
                        <div className="form-group my-2">
                            <label htmlFor="email" className="fw-bold">Your Email </label>
                            <input type="email" className="form-control" name="user_email" id="email"/>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="message" className="fw-bold">Your Message</label>
                            <textarea className="form-control" name="message" id="message"></textarea> 
                        </div>

                        <input type="submit" value="Send Message" className="btn btn-light mt-2"/>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;