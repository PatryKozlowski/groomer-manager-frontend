"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "Podaj poprawny adres email",
    })
    .min(1, {
      message: "Adres email jest wymagany",
    }),
  password: z
    .string()
    .min(8, {
      message: "Hasło musi mieć minimum 8 znaków",
    })
    .regex(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/, {
      message: "Hasło musi zawierać małą i dużą literę oraz cyfrę",
    }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <h3 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
          Zaloguj się
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLoginSubmit)}
            className="mt-8 space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      type="email"
                      placeholder="Podaj adres email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hasło</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      type="password"
                      placeholder="Podaj hasło"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-zinc-950 dark:bg-white">Zaloguj się</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
