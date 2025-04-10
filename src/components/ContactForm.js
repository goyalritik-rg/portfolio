import Button from "@/common/Button";
import InputController from "@/common/forms/InputController";
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

const controls = [
  {
    name: "name",
    type: "text",
    label: "Name",
    rules: { required: "Name is required" },
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    rules: {
      required: "Email is required",
      pattern: {
        value: EMAIL_REGEX,
        message: "Email is invalid",
      },
    },
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    rules: { required: "Message is required" },
  },
];

const ContactForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSave = () => {};

  return (
    <div className="w-full h-full bg-black cursor-auto p-6 relative">
      <h2 className="text-3xl text-white font-bold">Send me a message</h2>

      <p className="text-sm text-white/50 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nemo?
      </p>

      <div className="mt-10 flex flex-col gap-6 w-full">
        {controls.map((ctr) => {
          return (
            <div key={ctr.name}>
              <InputController {...ctr} control={control} />

              {errors[ctr.name] ? (
                <p className="text-red-500 mt-1 text-sm">
                  {errors[ctr.name]?.message}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <Button
        className="w-[90%] rounded-none absolute bottom-4 left-[5%]"
        type="primary"
        onClick={handleSubmit(handleSave)}
      >
        Send
      </Button>
    </div>
  );
};

export default ContactForm;
