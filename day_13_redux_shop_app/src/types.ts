export interface productDto {
  id: number;
  name: string;
  img: string;
  price: number;
  type: string;
}

export interface productDetailDto extends productDto {
  description: string;
}
export interface productCartDto extends productDto {
  quantity: number;
}

export interface tabDto {
  id: string;
  name: string;
}
