export interface ClientProvider {
  id: number
  user_id: string
  client_type: 'Natural' | 'Juridica'
  classification: 'Compra' | 'Venta'
  full_name: string
  tax_id: string
  passport_dni?: string
  phone: string
  email: string
  website?: string
  contact_person?: string
  fiscal_address: string
  delivery_address?: string
  coordinates?: { x: number; y: number }
  city: string
  state_province: string
  postal_code: string
  country: string
  preferred_currency: string
  bank_account?: string
  tax_regime: string
  tax_registration_number: string
  exemption_certificate?: string
  applicable_retentions?: any
  registration_date: string
  status: 'Activo' | 'Inactivo' | 'Suspendido'
  commercial_notes?: string
  data_consent: boolean
  associated_documents?: any
  digital_hash?: string
  created_at: string
  updated_at: string
}

export interface Product {
  id: number
  token_id: string
  creator_wallet: string
  tx_id?: string
  status: 'Disponible' | 'Vendido' | 'Transferido' | 'Quemado'
  name: string
  category: 'Aluminio' | 'Papel' | 'Carton' | 'Hierro' | 'Plastico'
  subcategory?: string
  description?: string
  image_url?: string
  measurement_unit: 'kg' | 'tonelada' | 'saco'
  quantity: number
  purity_percentage?: number
  presentation?: 'fardo' | 'saco' | 'big_bag'
  collection_date: string
  collection_location: string
  qr_code?: string
  verifier_wallet?: string
  document_hashes?: any
  approximate_location?: { x: number; y: number }
  base_price: number
  currency: string
  sale_condition?: 'contado' | 'credito'
  escrow_enabled: boolean
  fiscal_code?: string
  iva_exempt: boolean
  environmental_permits?: string
  recycling_certificate?: string
  utility_tokens?: number
  environmental_bonuses?: any
  green_certificate_nft?: string
  created_at: string
  updated_at: string
}

export interface Transaction {
  id: number
  transaction_hash?: string
  buyer_id?: number
  seller_id?: number
  product_id?: number
  transaction_type: 'Compra' | 'Venta' | 'Transferencia'
  amount: number
  currency: string
  status: 'Pendiente' | 'Confirmada' | 'Cancelada' | 'Completada'
  payment_method?: string
  blockchain_tx_id?: string
  escrow_address?: string
  created_at: string
  updated_at: string
}