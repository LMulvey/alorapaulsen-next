'use client';
import { submitContactForm } from '@/actions/contact-form';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { ContactFormSchema } from '@/schema/contact-form';
import { useMemo, useState } from 'react';

const MESSAGE_MINIMUM = 10;
const MESSAGE_MAXIMUM = 1_000;

export const ContactForm = () => {
  const timeNow = useMemo(() => new Date(), []);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [honeypotValue, setHoneypotValue] = useState('');

  const messageLength = messageValue.length;
  const isMessageValid =
    messageLength >= MESSAGE_MINIMUM && messageLength <= MESSAGE_MAXIMUM;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const formData = {
      email: emailValue,
      honeypot: honeypotValue,
      message: messageValue,
      name: nameValue,
      startTime: timeNow,
    };
    const parseResult = ContactFormSchema.safeParse(formData);

    if (!parseResult.success) {
      const prettyErrors = parseResult.error?.issues.map(({ message }) => {
        return `${message}`;
      });

      setError(prettyErrors.join('\n'));
      return;
    }

    const result = await submitContactForm(formData);
    if (result.success) {
      setHasSubmitted(true);
    } else {
      setError(result.error ?? 'Something went wrong! Please try again.');
    }
  };

  return (
    <>
      <p>
        Use this form to contact me about publications, writing opportunities,
        or any other inquiries. <strong>All fields are required.</strong>
      </p>

      {hasSubmitted ? (
        <>
          <h2>Thanks for the message</h2>
          <p>
            I will do my best to respond to your message as soon as possible.
          </p>
        </>
      ) : (
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label
              className="block text-sm font-medium"
              htmlFor="name"
            >
              Name
            </label>
            <Input
              id="name"
              onChange={(event) => {
                setNameValue(event.target.value);
                setError(null);
              }}
              placeholder="Your name"
              required
              value={nameValue}
            />
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              id="email"
              onChange={(event) => {
                setEmailValue(event.target.value);
                setError(null);
              }}
              placeholder="your.email@example.com"
              required
              type="email"
              value={emailValue}
            />
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-medium"
              htmlFor="message"
            >
              Message
            </label>
            <Textarea
              id="message"
              onChange={(event) => {
                setMessageValue(event.target.value);
                setError(null);
              }}
              placeholder="Your message..."
              required
              rows={5}
              value={messageValue}
            />
            <div
              className={`text-xs w-full text-right ${
                messageLength === 0
                  ? 'text-gray-500'
                  : isMessageValid
                    ? 'text-green-600'
                    : 'text-red-600'
              }`}
            >
              {messageLength} / {MESSAGE_MAXIMUM} characters
              {messageLength < MESSAGE_MINIMUM && (
                <span className="ml-1">
                  (minimum {MESSAGE_MINIMUM} required)
                </span>
              )}
            </div>
          </div>

          <input
            autoComplete="off"
            name="honeypot"
            onChange={(event) => {
              setHoneypotValue(event.target.value);
              setError(null);
            }}
            style={{ display: 'none' }}
            tabIndex={-1}
            type="text"
            value={honeypotValue}
          />

          <div className="text-lg text-red-600">{error}</div>

          <Button
            className="mt-4"
            type="submit"
            variant="default"
          >
            Send Message
          </Button>
        </form>
      )}
    </>
  );
};
