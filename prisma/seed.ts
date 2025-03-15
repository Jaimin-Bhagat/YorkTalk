import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Create topics
  const topics = [
    { name: 'Academics', description: 'Discussions about courses, professors, and academic programs' },
    { name: 'Campus Life', description: 'Talk about student life, events, and activities on campus' },
    { name: 'Housing', description: 'Find roommates, discuss housing options, and share experiences' },
    { name: 'Careers', description: 'Job opportunities, internships, and career advice' },
    { name: 'Food', description: 'Restaurant recommendations, dining options, and food-related discussions' },
    { name: 'Technology', description: 'Tech discussions, gadgets, and software recommendations' },
  ]

  console.log('Seeding topics...')
  for (const topic of topics) {
    await prisma.topic.upsert({
      where: { name: topic.name },
      update: {},
      create: {
        name: topic.name,
        description: topic.description,
      },
    })
  }

  // Create a demo user
  console.log('Seeding demo user...')
  const hashedPassword = await bcrypt.hash('password123', 10)
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@yorku.ca' },
    update: {},
    create: {
      name: 'Demo User',
      email: 'demo@yorku.ca',
      password: hashedPassword,
      emailVerified: new Date(),
    },
  })

  // Create some demo posts
  console.log('Seeding demo posts...')
  const academicsTopic = await prisma.topic.findUnique({ where: { name: 'Academics' } })
  const campusLifeTopic = await prisma.topic.findUnique({ where: { name: 'Campus Life' } })

  if (academicsTopic && campusLifeTopic) {
    await prisma.post.upsert({
      where: { id: 'demo-post-1' },
      update: {},
      create: {
        id: 'demo-post-1',
        title: 'Best courses for Computer Science students?',
        content: 'I\'m a second-year CS student looking for elective recommendations. What are some interesting and useful courses to take?',
        authorId: demoUser.id,
        topicId: academicsTopic.id,
      },
    })

    await prisma.post.upsert({
      where: { id: 'demo-post-2' },
      update: {},
      create: {
        id: 'demo-post-2',
        title: 'Upcoming events this semester',
        content: 'Does anyone know of any interesting events happening on campus this semester? Looking to get more involved!',
        authorId: demoUser.id,
        topicId: campusLifeTopic.id,
      },
    })
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 