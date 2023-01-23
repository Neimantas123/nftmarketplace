export type Nftattributes = {
  trait_type: 'attack' | 'health' | 'speed';
  value: string;
};

export type nftMeta = {
  name: string;
  description: string;
  image: string;
  attributes: Nftattributes[];
};
