import {
  useState,
  createContext,
  ReactElement,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

//====================================== TYPES =================================
export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
}

interface PageProps {
  children: ReactNode;
}

interface UserContextProps {
  isCartVisible: boolean;
  setIsCartVisible: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}

//====================================================== CONTEXT ==============================================

export const UserContext = createContext<UserContextProps>({
  isCartVisible: false,
  setIsCartVisible: () => {},
  cartItems: [],
  setCartItems: () => {},
});

export function UserContextProvider({ children }: PageProps) {
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function storeCart() {
    localStorage.setItem("vjCart", JSON.stringify(cartItems));
  }
  function fetchCart(): CartItem[] {
    const storedCart = localStorage.getItem("vjCart");

    if (storedCart) {
      try {
        const parsedItems = JSON.parse(storedCart) as CartItem[];
        return parsedItems;
      } catch (error) {
        console.error("Error parsing cart items from local storage:", error);
      }
    }
    return [];
  }

  // setting the cart items to local storage

  useEffect(() => {}, [cartItems]);

  const value = {
    isCartVisible,
    setIsCartVisible,
    cartItems,
    setCartItems,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
