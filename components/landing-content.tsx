'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface LandingContentProps {}

const testimonials = [
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Software Engineer',
    description: "This is the best application I've used!",
  },
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Software Engineer',
    description: "This is the best application I've used!",
  },
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Software Engineer',
    description: "This is the best application I've used!",
  },
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Software Engineer',
    description: "This is the best application I've used!",
  },
];

export function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-white">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map(user => (
          <Card
            key={user.description}
            className="border-none bg-[#192339] text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{user.name}</p>
                  <p className="text-sm text-zinc-400">{user.title}</p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4">
                {user.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
