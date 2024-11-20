'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

import emailjs from '@emailjs/browser';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Invalid email address.',
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters.',
    }),
});

export function ContactForm() {
    const { toast } = useToast();

    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        emailjs.send('contact-me-service', 'contact-me-form', values, { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }).then(
            () => {
                console.log('Message sucessfully sent!');
                form.reset();
                // alert('Message Sent!');
                toast({ description: 'Message sucessfully sent!' });
            },
            error => {
                console.log('FAILED...', error.text);
                // alert('Message failed to send.');
                toast({ description: 'Message failed to send.', variant: 'destructive' });
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 border rounded-md">
                <div className="flex flex-wrap w-full gap-6">
                    <div className="flex-[1] min-w-48">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex-[1] min-w-48">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} /* className="focus-visible:ring-0 focus-visible:border-primary" */ />
                                    </FormControl>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Looking forward to working with you!" {...field} />
                            </FormControl>
                            {/* <FormDescription>This is your public display name.</FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
