import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Rodot_5000 } from "../models/Rodot_5000";
import useAlert from "../hooks/useAlert";
import Loader from "../components/Loader";
import Alert from "../components/Alert";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Static pose");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("Animation");
  const handleBlur = () => setCurrentAnimation("Static pose");

  const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setCurrentAnimation("hit");

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            name: form.name,
            to_name: "Parth Desai",
            email: form.email,
            to_email: "parthraaj6973@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            showAlert({
              show: true,
              text: "Thank you for your message 😃",
              type: "success",
            });
            setCurrentAnimation("Static pose");
          },
          (error) => {
            setLoading(false);
            console.error("Email error:", error);
            setCurrentAnimation("Static pose");

            showAlert({
              show: true,
              text: "I didn't receive your message 😢",
              type: "danger",
            });
          }
        );
    }
    
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} onClose={hideAlert} />}

      <div className='flex-1 min-w-[50%] flex flex-col '>
        <h1 className='head-text text-bittersweet-500'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='font-bold py-3 px-8 rounded-xl outline-none shadow-md btn-bittersweet'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[1, 1, 0]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 10]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
          <Rodot_5000
            currentAnimation={currentAnimation}
            position={[2, -1, 0]} // Adjusted Y position to account for larger size
            rotation={[0, -Math.PI/2 - 0.5, 0]} // Rotate 180 degrees (π radians) around Y axis to face front
            scale={[2.5,2.5,2.5]} // Increased scale from 0.8 to 1.5
          />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;