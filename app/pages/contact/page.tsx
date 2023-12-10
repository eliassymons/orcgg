function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-4 pb-20 text-dark"
    >
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <div>
        <p>Phone: 714-539-9541</p>
        <p>email: Office@orcgg.org</p>
      </div>
      <p className="font-bold max-w-sm text-center">
        Our office is open from 9:00 AM-4PM Monday-Friday.
      </p>
      <div className="flex flex-col items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1170835250555!2d-117.97893142365992!3d33.78347453187312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd288b6b470a53%3A0x8e7704a988ad76f4!2sOur%20Redeemer%20Lutheran%20Church!5e0!3m2!1sen!2sus!4v1697916190933!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          className="max-w-sm h-[20rem]"
        ></iframe>
        <p className="font-bold mt-4">Our Redeemer Garden Grove</p>
        <p>12301 Magnolia Street</p>
        <p>Garden Grove, California 92841</p>
      </div>
    </div>
  );
}

export default Contact;
