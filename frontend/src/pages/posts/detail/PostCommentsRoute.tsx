import { Box, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, Text, VStack } from '@yamada-ui/react'
import { AttributeDisplay } from './AttributeDisplay'
import { useRef } from 'react'
import dayjs from 'dayjs'

export const CommentRoute = ({ id }: { id: number }) => {
  // mock
  const commentList = [
    {
      id: 1,
      post_id: 1,
      user_id: 1,
      user_name: 'user1',
      body: 'body1',
      created_at: '2021-01-01T00:00:00',
      updated_at: '2021-01-01T00:00:00'
    },
    {
      id: 2,
      post_id: 1,
      user_id: 2,
      user_name: 'user2',
      body: 'body2',
      created_at: '2021-01-01T00:00:00',
      updated_at: '2021-01-01T00:00:00'
    },
    {
      id: 2,
      post_id: 1,
      user_id: 2,
      user_name: 'user2',
      body: 'body2',
      created_at: '2021-01-01T00:00:00',
      updated_at: '2021-01-01T00:00:00'
    },
    {
      id: 2,
      post_id: 1,
      user_id: 2,
      user_name: 'user2',
      body: 'body2',
      created_at: '2021-01-01T00:00:00',
      updated_at: '2021-01-01T00:00:00'
    },
    {
      id: 2,
      post_id: 1,
      user_id: 2,
      user_name: 'user2',
      body: 'body2',
      created_at: '2021-01-01T00:00:00',
      updated_at: '2021-01-01T00:00:00'
    }
  ]

  return (
    <>
      <VStack h="md" p="md" w="full" overflow="auto">
        {commentList.map((comment) => (
          <>
            <Box w="full" p="md" border="2px solid" borderColor="gray.50" borderRadius="md">
              <Text>{comment.body}</Text>
              <HStack>
                <Text>{comment.user_name}</Text>
                <AttributeDisplay
                  labelName="作成日時："
                  value={dayjs(comment.created_at).format('YYYY年M月D日 HH:mm:ss')}
                />
              </HStack>
            </Box>
          </>
        ))}
      </VStack>
    </>
  )
}
