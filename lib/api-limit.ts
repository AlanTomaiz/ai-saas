import { prismadb } from '@/lib/prismadb';
import { MAX_FREE_COUNTS } from '@/state/constants';
import { auth } from '@clerk/nextjs';

export const increasedApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  await prismadb.userApiLimit.upsert({
    where: { userId },
    update: { count: { increment: 1 } },
    create: { userId, count: 1 },
  });
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  }

  return false;
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
