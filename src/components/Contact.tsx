import { Loader2, MailOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "sonner";
import LanguageContext from "@/languages/LangugeContext";
import { contact } from "@/languages/contact";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const contactContent = contact[language];

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name === "" || form.email === "" || form.message === "") {
      toast.warning(contactContent.messages.empty);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ps5dafu",
        "template_r1ishlm",
        {
          from_name: form.name,
          to_name: "Ilyas",
          from_email: form.email,
          to_email: "ilyaselmadni1@gmail.com",
          message: form.message,
        },
        "0e7vbyLP2OCnF7D5_"
      )
      .then(
        () => {
          setLoading(false);

          setForm({
            name: "",
            email: "",
            message: "",
          });

          toast.success(contactContent.messages.success);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.warning(contactContent.messages.error);
        }
      );
  };

  return (
    <section id="contact" className="flex flex-col items-center gap-16 py-20">
      <h2 className="section-title">Contact</h2>
      <div className="section-container flex flex-col items-left w-full">
        <Toaster
          style={
            {
              "--normal-bg": "var(--color-background)",
              "--normal-text": "var(--color-text)",
              "--normal-border": "var(--color-secondary)",
            } as React.CSSProperties
          }
        />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="name" className="text-text font-bold">
              {contactContent.inputs[0].label}
            </label>
            <input
              aria-label="User Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={contactContent.inputs[0].placeholder}
              className="text-text placeholder:text-text/50 border border-secondary px-4 py-3 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="email" className="text-text font-bold">
              {contactContent.inputs[1].label}
            </label>
            <input
              aria-label="User Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={contactContent.inputs[1].placeholder}
              className="text-text placeholder:text-text/50 border border-secondary px-4 py-3 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="message" className="text-text font-bold">
              {contactContent.inputs[2].label}
            </label>
            <textarea
              aria-label="User Message"
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={contactContent.inputs[2].placeholder}
              className="text-text placeholder:text-text/50 border border-secondary px-4 py-3 rounded-lg resize-none outline-none"
            />
          </div>
          {loading ? (
            <Button
              variant="outline"
              className="flex items-center justify-center mt-10 text-text text-base font-semibold h-12 w-full gap-2 cursor-pointer"
              disabled
            >
              <Loader2 className="animate-spin" /> {contactContent.button.loading}
            </Button>
          ) : (
            <Button
              variant="outline"
              className="flex items-center justify-center mt-10 text-text text-base font-semibold h-12 w-full gap-2 cursor-pointer"
            >
              <MailOpen /> {contactContent.button.send}
            </Button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
