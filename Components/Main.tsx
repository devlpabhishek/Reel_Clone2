import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface PostProps {
  post: {
    image: string;
    likes: number;
    comments: string[];
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.image }} style={styles.image} />
      <View style={styles.actions}>
        <TouchableOpacity>
          <Text>{post.likes} Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{post.comments.length} Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
});

export default Post;
