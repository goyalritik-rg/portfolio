import Button from "@/common/ui-components/Button";
import InputController from "@/common/forms/InputController";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Cross from "@/common/components/Cross";

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

const ContactForm = ({ onSuccess = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleSave = async (values) => {
    try {
      setLoading(true);

      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        reset();

        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
          onSuccess();
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full cursor-auto p-6 relative">
      <Cross
        className="absolute right-3 top-3"
        onClick={() => {
          onSuccess();
          reset();
        }}
      />

      <h2 className="text-3xl text-white font-bold">Drop a Line of Code</h2>

      <p className="text-md text-white/50 mt-2">
        Your message might just compile perfectly.
      </p>

      <div className="mt-12 flex flex-col gap-6 w-full">
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

      <div className="absolute bottom-4 left-[5%] w-[90%]">
        <AnimatePresence>
          {showToast ? (
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lime-500 font-bold text-lg mb-4"
            >
              Message Sent Successfully!
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Button
          className="rounded-none w-full"
          type="primary"
          onClick={handleSubmit(handleSave)}
          loading={loading}
        >
          Run Message
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
