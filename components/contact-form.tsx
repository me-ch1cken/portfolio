'use client';

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const formSchema = z.object({
    email: z.string().min(1).max(100),
    fullName: z.string().min(1).max(150),
    message: z.string().min(5).max(1500)
});

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            fullName: '',
            message: ''
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitStatus('success');
            form.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 my-4">
                {/* Responsive 2-column grid for email and name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='your@email.com' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="fullName" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>

                {/* Message Field */}
                <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Your message..." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                
                {submitStatus === 'success' && (
                    <p className="text-green-600">I have received your message and will get back to you as soon as possible! 🤗</p>
                )}
                {submitStatus === 'error' && (
                    <p className="text-red-600">Something went wrong, try again later.</p>
                )}
                
                <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="cursor-pointer"
                >
                    {isSubmitting ? 'Sending...' : 'Get in touch!'}
                </Button>
            </form>
        </Form>
    );
}
