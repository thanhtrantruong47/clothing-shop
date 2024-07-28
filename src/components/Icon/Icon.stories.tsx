import type { Meta, StoryObj } from '@storybook/react';
import { CartIcon } from './CartIcon';
import { LikeIcon } from './LikeIcon';
import { SearchIcon } from './SearchIcon';
import { LoginIcon } from './LoginIcon';

export default {
  title: 'Icons',
} as Meta;

// CartIcon story
export const Cart: StoryObj = () => <CartIcon />;
Cart.storyName = 'Cart Icon';

// LikeIcon story
export const Like: StoryObj = () => <LikeIcon />;
Like.storyName = 'Like Icon';

export const Search: StoryObj = () => <SearchIcon />;
Search.storyName = 'Search Icon';

// LikeIcon story
export const Login: StoryObj = () => <LoginIcon />;
Login.storyName = 'Login Icon';
