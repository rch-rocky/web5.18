import { chromatography } from '@/lib/products/chromatography';
import ProductDetailPage from '../[id]/category-detail';

export default function ChromatographyProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} categoryData={chromatography} />;
}