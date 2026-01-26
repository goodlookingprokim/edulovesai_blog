---
title: "바이브코딩으로 쇼핑몰과 토스페이먼츠 MCP 연동 완벽 가이드"
created: '2025-01-13'
last_modified: '2025-01-13'
tags:
  - Claude-Code
  - MCP
  - 토스페이먼츠
  - 바이브코딩
  - 루비온레일즈
  - 결제시스템
  - 쇼핑몰
  - AI개발
  - 풀스택
status: "완료"
type: "실전가이드"
priority: "high"
source: "YouTube - https://youtu.be/9Y5pKd5nqUs"
---

# 바이브코딩으로 쇼핑몰과 토스페이먼츠 MCP 연동 완벽 가이드

## 📋 목차
1. [[#서비스 수익화를 위한 결제 시스템 개요]]
2. [[#토스페이먼츠 MCP 시스템 소개]]
3. [[#개발 환경 설정 루비온 레일즈 및 클로드 코드]]
4. [[#쇼핑몰 기본 기능 구현]]
5. [[#토스페이먼츠 MCP 설정 및 연동]]
6. [[#결제 기능 구현 및 문제 해결]]
7. [[#AI 코딩 실전 노하우]]
8. [[#고급 활용 및 확장 방안]]

## 개요
- **핵심 주제**: Claude Code와 토스페이먼츠 MCP를 활용한 쇼핑몰 결제 시스템 구현
- **목적**: 비개발자도 AI 도움으로 실제 결제가 가능한 쇼핑몰 제작
- **범위**: 환경설정부터 실제 결제 테스트까지 전 과정
- **특징**: 바이브코딩 방식으로 Ruby on Rails 기반 풀스택 개발

## 서비스 수익화를 위한 결제 시스템 개요

### 수익화 필수 요소
- **광고 수익**: 광고를 통한 수익 창출
- **결제 수익**: 사용자 직접 결제를 통한 수익 창출

### 결제 방식 분류
#### 1. 구독 결제 (빌링키 결제)
- **특징**: 매월 자동 결제 시스템
- **활용**: 구독 서비스, 멤버십 서비스
- **기술**: 빌링키(Billing Key) 방식 활용

#### 2. 단건 결제
- **특징**: 사용자가 직접 결제 버튼을 눌러 결제
- **활용**: 쇼핑몰, 일회성 상품 구매
- **프로세스**: 장바구니 → 결제 정보 입력 → 결제 완료

## 토스페이먼츠 MCP 시스템 소개

### 토스페이먼츠 선택 이유
#### 기술적 장점
- **간편한 연동**: 다른 PG사 대비 연동 과정 단순화
- **우수한 대시보드**: 
  - 결제 내역 실시간 확인
  - 부가세 자료 자동 다운로드
  - 결제 취소/환불 원클릭 처리
- **한국 사용자 친화적**: 국내 결제 환경에 최적화

#### MCP (Model Context Protocol) 통합
- **AI 친화적 문서화**: AI가 토스페이먼츠 API 문서를 효율적으로 이해
- **자동 구현 지원**: Claude Code가 결제 로직을 자동으로 구현
- **실시간 문서 참조**: 최신 API 스펙을 실시간으로 참조하여 구현

### MCP 활용의 혁신성
```yaml
기존 방식:
  - 개발자가 수동으로 API 문서 읽기
  - 복잡한 결제 로직 직접 구현
  - 오류 발생 시 수동 디버깅

MCP 방식:
  - AI가 자동으로 문서 분석
  - 결제 로직 자동 생성
  - 오류 자동 감지 및 수정 제안
```

## 개발 환경 설정 루비온 레일즈 및 클로드 코드

### Ruby on Rails 설치

#### 설치 전 준비사항
```bash
# 시스템 요구사항 확인
ruby --version
rails --version
```

#### 운영체제별 설치 가이드

##### macOS 환경
```bash
# Homebrew 설치 (미설치 시)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Ruby 설치
brew install ruby

# Rails 설치
gem install rails

# 프로젝트 생성
rails new toss_test -c tailwind
cd toss_test
```

##### Ubuntu/Linux 환경
```bash
# 의존성 설치
sudo apt update
sudo apt install -y git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential

# rbenv 설치
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash

# Ruby 설치
rbenv install 3.2.0
rbenv global 3.2.0

# Rails 설치
gem install rails
```

##### Windows 환경 (WSL 필수)
```bash
# WSL2 설치 (PowerShell 관리자 권한)
wsl --install

# WSL Ubuntu에서 진행
# Ubuntu 터미널에서 위 Linux 설치 과정 동일 수행
```

#### Rails 프로젝트 생성 및 실행
```bash
# Tailwind CSS 포함 프로젝트 생성
rails new toss_test -c tailwind

# 프로젝트 폴더 이동
cd toss_test

# 개발 서버 실행
bin/rails server

# 브라우저에서 확인
# http://localhost:3000
```

### Claude Code 설치

#### Node.js 설치 (전제조건)
```bash
# macOS
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node

# Ubuntu/WSL
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Claude Code 설치
```bash
# 전역 설치
npm install -g @anthropic-ai/claude-code

# 설치 확인
claude --version
```

#### 초기 설정
```bash
# API 키 설정
claude auth

# 프로젝트에서 Claude 실행
claude
```

### Ruby on Rails의 바이브코딩 장점

#### 풀스택 프레임워크 특성
- **올인원 솔루션**: 데이터베이스, 백엔드, 프론트엔드 통합
- **Convention over Configuration**: 설정보다 규칙으로 개발 속도 향상
- **코드 간결성**: AI가 이해하고 구현하기 용이한 구조

#### AI 친화적 특성
```ruby
# 간결한 모델 정의
class Product < ApplicationRecord
  has_many :cart_items
  validates :name, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
end

# 자동 라우팅
resources :products do
  member do
    post :add_to_cart
  end
end
```

## 쇼핑몰 기본 기능 구현

### Claude에게 요청하기
```
간단한 쇼핑몰을 만들어 줘.
- 상품 목록 페이지
- 상품 상세 페이지  
- 장바구니 기능
- 결제하기 페이지
포함해서 구현해 줘.
```

### 자동 생성되는 구조

#### 데이터베이스 마이그레이션
```ruby
# 상품 테이블
class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description
      t.decimal :price, precision: 10, scale: 2, null: false
      t.string :image_url
      t.integer :stock, default: 0
      t.timestamps
    end
  end
end

# 장바구니 테이블
class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.string :session_id, null: false
      t.timestamps
    end
    add_index :carts, :session_id
  end
end

# 장바구니 아이템 테이블
class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.references :cart, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.integer :quantity, default: 1
      t.timestamps
    end
  end
end
```

#### 컨트롤러 생성
```ruby
class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def add_to_cart
    @product = Product.find(params[:id])
    @cart = current_cart
    @cart_item = @cart.cart_items.find_by(product: @product)
    
    if @cart_item
      @cart_item.quantity += 1
    else
      @cart_item = @cart.cart_items.build(product: @product)
    end
    
    @cart_item.save
    redirect_to @product, notice: '장바구니에 추가되었습니다.'
  end

  private

  def current_cart
    Cart.find_by(session_id: session.id) || Cart.create(session_id: session.id)
  end
end
```

#### 뷰 템플릿
```erb
<!-- 상품 목록 (app/views/products/index.html.erb) -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <% @products.each do |product| %>
    <div class="bg-white rounded-lg shadow-md p-6">
      <% if product.image_url.present? %>
        <%= image_tag product.image_url, class: "w-full h-48 object-cover mb-4 rounded" %>
      <% end %>
      <h3 class="text-lg font-semibold mb-2"><%= product.name %></h3>
      <p class="text-gray-600 mb-4"><%= product.description %></p>
      <p class="text-xl font-bold text-blue-600 mb-4">
        <%= number_to_currency(product.price, unit: "₩", precision: 0) %>
      </p>
      <%= link_to "상세보기", product, class: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" %>
    </div>
  <% end %>
</div>
```

### 샘플 데이터 생성 (Seeds)
```ruby
# db/seeds.rb
Product.create!([
  {
    name: "무선 이어폰",
    description: "고음질 블루투스 무선 이어폰",
    price: 89000,
    image_url: "https://example.com/earphone.jpg",
    stock: 50
  },
  {
    name: "스마트 워치",
    description: "건강 관리 기능이 포함된 스마트 워치",
    price: 299000,
    image_url: "https://example.com/smartwatch.jpg",
    stock: 30
  },
  {
    name: "휴대용 충전기",
    description: "대용량 10000mAh 휴대용 배터리",
    price: 45000,
    image_url: "https://example.com/powerbank.jpg",
    stock: 100
  }
])
```

### 스타일링 (Tailwind CSS)
```css
/* 자동 생성되는 Tailwind 기반 스타일링 */
.product-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6;
}

.product-card {
  @apply bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow;
}

.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors;
}
```

## 토스페이먼츠 MCP 설정 및 연동

### MCP 설치 및 설정

#### 새 터미널에서 MCP 설정
```bash
# 새 터미널 탭 열기 (Cmd+T 또는 Ctrl+T)

# 현재 MCP 목록 확인
claude mcp list

# 토스페이먼츠 MCP 설치
claude mcp add -s user \
  --name tosspayments \
  --command npx \
  --args @anthropic/tosspayments-mcp-server \
  --env TOSS_CLIENT_KEY=test_ck_Z1aOwX7K8m5kM9rYr39PNyJn2db6 \
  --env TOSS_SECRET_KEY=test_sk_P9BRQmyDjGykM9rZMZfP4wPEZbP6
```

#### MCP 설정 옵션 설명
- **-s user**: 전체 시스템에서 MCP 사용 가능 (모든 프로젝트)
- **-s user 제외**: 현재 프로젝트에서만 사용 가능
- **환경변수**: 테스트용 키 (실제 서비스 시 실제 키로 변경 필요)

### MCP 설치 확인
```bash
# MCP 목록에서 tosspayments 확인
claude mcp list

# 출력 예시:
# tosspayments: npx @anthropic/tosspayments-mcp-server
```

### Claude 재실행 (MCP 적용)
```bash
# 기존 세션 종료 후 재실행
claude --continue
# 또는
claude --resume

# MCP 로드 확인
/mcp
```

### 실제 키 설정 방법
```bash
# 토스페이먼츠 개발자센터에서 발급받은 키로 변경
claude mcp update tosspayments \
  --env TOSS_CLIENT_KEY=실제_클라이언트_키 \
  --env TOSS_SECRET_KEY=실제_시크릿_키
```

## 결제 기능 구현 및 문제 해결

### Claude에게 결제 기능 요청
```
토스페이먼츠 MCP를 이용해서 장바구니 결제 기능을 구현해 줘.
- 주문자 정보 입력
- 결제 위젯 표시
- 결제 승인 처리
- 주문 완료 페이지
포함해서 만들어 줘.
```

### 자동 생성되는 결제 구조

#### 주문 모델 생성
```ruby
class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :order_id, null: false
      t.string :customer_name, null: false
      t.string :customer_email, null: false
      t.string :customer_phone
      t.decimal :total_amount, precision: 10, scale: 2
      t.string :status, default: 'pending'
      t.string :payment_key
      t.timestamps
    end
    add_index :orders, :order_id, unique: true
  end
end

class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.references :order, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.integer :quantity
      t.decimal :price, precision: 10, scale: 2
      t.timestamps
    end
  end
end
```

#### 결제 컨트롤러
```ruby
class CheckoutController < ApplicationController
  def show
    @cart = current_cart
    @cart_items = @cart.cart_items.includes(:product)
    @total_amount = calculate_total(@cart_items)
    @order = Order.new
  end

  def create
    @cart = current_cart
    @cart_items = @cart.cart_items.includes(:product)
    @total_amount = calculate_total(@cart_items)
    
    @order = Order.new(order_params)
    @order.order_id = generate_order_id
    @order.total_amount = @total_amount
    
    if @order.save
      # 주문 아이템 생성
      @cart_items.each do |cart_item|
        @order.order_items.create!(
          product: cart_item.product,
          quantity: cart_item.quantity,
          price: cart_item.product.price
        )
      end
      
      render :payment
    else
      render :show
    end
  end

  def confirm
    order_id = params[:orderId]
    payment_key = params[:paymentKey]
    amount = params[:amount].to_i
    
    @order = Order.find_by(order_id: order_id)
    
    if @order && @order.total_amount == amount
      # 토스페이먼츠 결제 승인 API 호출
      result = confirm_payment(payment_key, order_id, amount)
      
      if result['status'] == 'DONE'
        @order.update!(
          status: 'completed',
          payment_key: payment_key
        )
        
        # 장바구니 비우기
        current_cart.cart_items.destroy_all
        
        redirect_to checkout_success_path(@order)
      else
        redirect_to checkout_failure_path, alert: '결제 승인에 실패했습니다.'
      end
    else
      redirect_to checkout_failure_path, alert: '주문 정보가 일치하지 않습니다.'
    end
  end

  private

  def order_params
    params.require(:order).permit(:customer_name, :customer_email, :customer_phone)
  end

  def calculate_total(cart_items)
    cart_items.sum { |item| item.product.price * item.quantity }
  end

  def generate_order_id
    "ORDER_#{Time.current.strftime('%Y%m%d%H%M%S')}_#{SecureRandom.hex(4)}"
  end

  def confirm_payment(payment_key, order_id, amount)
    # MCP를 통한 토스페이먼츠 API 호출
    # 실제 구현은 Claude가 자동 생성
  end
end
```

#### 결제 페이지 뷰
```erb
<!-- app/views/checkout/payment.html.erb -->
<div class="max-w-2xl mx-auto p-6">
  <h1 class="text-2xl font-bold mb-6">결제하기</h1>
  
  <!-- 주문 정보 표시 -->
  <div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h3 class="font-semibold mb-2">주문 정보</h3>
    <p><strong>주문자:</strong> <%= @order.customer_name %></p>
    <p><strong>이메일:</strong> <%= @order.customer_email %></p>
    <p><strong>총 금액:</strong> <%= number_to_currency(@order.total_amount, unit: "₩", precision: 0) %></p>
  </div>
  
  <!-- 토스페이먼츠 결제 위젯 -->
  <div id="payment-widget"></div>
  <div id="agreement"></div>
  
  <button id="payment-button" class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold mt-4" disabled>
    결제하기
  </button>
</div>

<script src="https://js.tosspayments.com/v1/payment-widget"></script>
<script>
  const paymentWidget = PaymentWidget(
    '<%= Rails.application.credentials.toss[:client_key] %>',
    PaymentWidget.ANONYMOUS
  );

  paymentWidget.renderPaymentMethods(
    '#payment-widget',
    { value: <%= @order.total_amount %> },
    { variantKey: 'DEFAULT' }
  );

  paymentWidget.renderAgreement('#agreement');

  document.getElementById('payment-button').addEventListener('click', async function () {
    try {
      await paymentWidget.requestPayment({
        orderId: '<%= @order.order_id %>',
        orderName: '쇼핑몰 주문',
        customerName: '<%= @order.customer_name %>',
        customerEmail: '<%= @order.customer_email %>',
        successUrl: window.location.origin + '/checkout/confirm',
        failUrl: window.location.origin + '/checkout/failure',
      });
    } catch (error) {
      console.error('결제 요청 실패:', error);
    }
  });
</script>
```

### 주요 문제 해결 과정

#### 1. 결제 버튼 비활성화 문제
**문제**: 주문 정보 입력 후에도 결제 버튼이 활성화되지 않음

**해결 과정**:
```javascript
// 문제 확인
console.log('Payment widget status:', paymentWidget);

// 콘솔 오류: "Payment widget is not found"

// 해결책: 위젯 로드 대기
paymentWidget.on('ready', function() {
  document.getElementById('payment-button').disabled = false;
});
```

#### 2. 결제 위젯 로드 문제 (Turbo 이슈)
**문제**: 장바구니에서 결제 페이지로 이동 시 위젯이 표시되지 않음, 새로고침해야 표시됨

**원인**: Ruby on Rails의 Turbo(Turbolinks)가 JavaScript 로드 방식을 변경

**해결책**:
```erb
<!-- 결제하기 버튼에 turbo 비활성화 -->
<%= link_to "결제하기", checkout_path, 
    method: :post, 
    class: "btn btn-primary",
    data: { turbo: false } %>
```

```javascript
// 또는 Turbo 이벤트 대응
document.addEventListener('turbo:load', function() {
  if (document.getElementById('payment-widget')) {
    initializePaymentWidget();
  }
});
```

#### 3. 결제 승인 실패 문제
**문제**: 테스트 결제 시 "잘못된 시크릿 키" 오류

**문제 확인 과정**:
```ruby
# 로그 추가
Rails.logger.info "Payment confirmation request: #{payment_key}, #{order_id}, #{amount}"

# 서버 로그 확인
tail -f log/development.log
```

**해결책**:
```ruby
# 환경변수 확인 및 수정
class CheckoutController < ApplicationController
  private
  
  def confirm_payment(payment_key, order_id, amount)
    uri = URI('https://api.tosspayments.com/v1/payments/confirm')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    
    request = Net::HTTP::Post.new(uri)
    request['Authorization'] = "Basic #{Base64.strict_encode64("#{Rails.application.credentials.toss[:secret_key]}:")}"
    request['Content-Type'] = 'application/json'
    request.body = {
      paymentKey: payment_key,
      orderId: order_id,
      amount: amount
    }.to_json
    
    response = http.request(request)
    JSON.parse(response.body)
  end
end
```

#### 4. 상품 금액 조정
**문제**: 초기 상품 금액(170만원)이 너무 높아 복잡한 인증 절차 발생

**해결책**:
```ruby
# 샘플 데이터 금액 조정
Product.update_all('price = CASE 
  WHEN name LIKE "%이어폰%" THEN 500
  WHEN name LIKE "%워치%" THEN 300  
  WHEN name LIKE "%충전기%" THEN 400
  ELSE 500 END')
```

Claude가 데이터베이스 업데이트 순서 오류를 자동으로 감지하고 수정:
```ruby
# 잘못된 순서 (Claude가 자동 수정)
# Product.destroy_all  # 참조 무결성 오류
# CartItem.destroy_all

# 올바른 순서
CartItem.destroy_all
Product.destroy_all
# 새 샘플 데이터 생성
```

### 최종 결제 테스트 성공
- **테스트 금액**: 400원
- **결제 상태**: 승인 완료
- **주문 완료**: 장바구니 자동 비우기 확인

## AI 코딩 실전 노하우

### 효과적인 AI 소통 전략

#### 1. 구체적 문제 설명
**좋은 예시**:
```
"장바구니에서 결제하기 버튼으로 들어왔을 때 결제 위젯 표시가 안 되고 
리프레시를 하니까 표시가 되었어. Turbo 관련 문제인 것 같아."
```

**나쁜 예시**:
```
"결제가 안 돼요."
```

#### 2. 오류 로그 활용
```javascript
// 브라우저 개발자 도구 (F12) 활용
console.log('현재 상태:', paymentWidget);
console.error('오류 내용:', error);

// 네트워크 탭에서 API 응답 확인
// 결제 승인 API 응답: 400 Bad Request
```

```ruby
# 서버 로그 활용
Rails.logger.info "Payment request: #{params.inspect}"
Rails.logger.error "Payment error: #{e.message}"

# 로그 실시간 확인
tail -f log/development.log
```

#### 3. 단계별 문제 해결
```
1차 시도: "결제 기능을 구현해 줘"
문제 발생: 버튼 비활성화

2차 시도: "결제 버튼이 비활성화돼. 콘솔 오류는 'Payment widget is not found'"
해결: 위젯 로드 완료 대기 로직 추가

3차 시도: "위젯은 표시되는데 페이지 이동 시 사라져. 새로고침하면 표시돼"
해결: Turbo 비활성화 또는 이벤트 대응

4차 시도: "결제 승인에서 '잘못된 시크릿 키' 오류"
해결: 환경변수 및 API 호출 방식 수정
```

### AI 코딩의 장점

#### 1. 개발 속도 혁신
- **기존 방식**: 숙련 개발자도 며칠 소요
- **AI 활용**: 몇 시간 내 구현 완료
- **학습 곡선**: 코딩 지식 없이도 결과물 생성

#### 2. 자동 디버깅
```ruby
# AI가 자동으로 감지하고 수정한 예시
# 잘못된 코드 (AI 1차 생성)
def confirm_payment(payment_key, order_id, amount)
  # Base64 인코딩 누락
  request['Authorization'] = "Basic #{secret_key}"
end

# 수정된 코드 (AI 자동 수정)
def confirm_payment(payment_key, order_id, amount)
  # 올바른 인증 헤더
  request['Authorization'] = "Basic #{Base64.strict_encode64("#{secret_key}:")}"
end
```

#### 3. 지속적 학습
- **오류 패턴 학습**: 동일한 오류 재발 방지
- **베스트 프랙티스**: 업계 표준 자동 적용
- **최신 기술**: 실시간 문서 참조로 최신 API 활용

### 개발자 vs AI 비교

| 구분 | 숙련 개발자 | AI (Claude Code) |
|------|-------------|------------------|
| 초기 설정 | 30분-1시간 | 5-10분 |
| 기본 기능 구현 | 1-2일 | 1-2시간 |
| 결제 연동 | 반나절-1일 | 1-2시간 |
| 디버깅 | 수동 분석 | 자동 감지 + 수정 제안 |
| 문서 참조 | 수동 검색 | MCP 자동 참조 |
| 총 개발 시간 | 3-5일 | 4-6시간 |

## 고급 활용 및 확장 방안

### 빌링키 결제 구현 방향
```ruby
# 구독 결제를 위한 빌링키 모델
class BillingKey < ApplicationRecord
  belongs_to :user
  
  validates :customer_key, presence: true, uniqueness: true
  validates :billing_key, presence: true
  
  enum status: { active: 0, inactive: 1, expired: 2 }
end

# 정기 결제 모델
class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :billing_key
  
  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :billing_cycle, inclusion: { in: %w[monthly yearly] }
  
  enum status: { active: 0, paused: 1, cancelled: 2 }
end
```

### 결제 대시보드 구현
```ruby
class Admin::PaymentsController < ApplicationController
  before_action :authenticate_admin!
  
  def index
    @payments = Payment.includes(:order, :user)
                      .order(created_at: :desc)
                      .page(params[:page])
    
    @total_revenue = Payment.where(status: 'completed').sum(:amount)
    @monthly_revenue = Payment.where(
      status: 'completed',
      created_at: 1.month.ago..Time.current
    ).sum(:amount)
  end
  
  def refund
    @payment = Payment.find(params[:id])
    
    if @payment.refundable?
      result = refund_payment(@payment.payment_key, @payment.amount)
      
      if result['status'] == 'DONE'
        @payment.update!(status: 'refunded')
        redirect_to admin_payments_path, notice: '환불이 완료되었습니다.'
      else
        redirect_to admin_payments_path, alert: '환불에 실패했습니다.'
      end
    end
  end
end
```

### 고급 보안 기능
```ruby
# 결제 위변조 방지
class PaymentSecurityService
  def self.verify_webhook(request)
    signature = request.headers['HTTP_X_TOSS_SIGNATURE']
    body = request.body.read
    
    expected_signature = OpenSSL::HMAC.hexdigest(
      'SHA256',
      Rails.application.credentials.toss[:webhook_secret],
      body
    )
    
    signature == expected_signature
  end
end

# IP 화이트리스트
class PaymentController < ApplicationController
  before_action :verify_toss_ip, only: [:webhook]
  
  private
  
  def verify_toss_ip
    allowed_ips = %w[
      52.78.100.19
      52.78.48.223
      52.78.5.241
    ]
    
    unless allowed_ips.include?(request.remote_ip)
      head :forbidden
    end
  end
end
```

### 성능 최적화
```ruby
# 결제 로그 비동기 처리
class PaymentLogJob < ApplicationJob
  queue_as :default
  
  def perform(payment_data)
    PaymentLog.create!(
      payment_id: payment_data[:payment_id],
      event_type: payment_data[:event_type],
      raw_data: payment_data[:raw_data]
    )
  end
end

# 결제 알림 큐잉
class PaymentNotificationJob < ApplicationJob
  def perform(order_id)
    order = Order.find(order_id)
    
    # 이메일 발송
    PaymentMailer.payment_confirmation(order).deliver_now
    
    # SMS 발송 (선택적)
    SmsService.send_payment_confirmation(order) if order.customer_phone.present?
  end
end
```

### 다중 PG사 연동 구조
```ruby
class PaymentGatewayService
  GATEWAYS = {
    toss: TossPaymentGateway,
    nice: NicePaymentGateway,
    kakao: KakaoPaymentGateway
  }.freeze
  
  def self.process_payment(gateway_type, payment_data)
    gateway_class = GATEWAYS[gateway_type.to_sym]
    raise ArgumentError, "Unsupported gateway: #{gateway_type}" unless gateway_class
    
    gateway_class.new.process_payment(payment_data)
  end
end

class TossPaymentGateway
  def process_payment(payment_data)
    # 토스페이먼츠 로직
  end
end

class NicePaymentGateway  
  def process_payment(payment_data)
    # 나이스페이 로직
  end
end
```

## 구현 체크리스트
- [x] Ruby on Rails 설치 및 프로젝트 생성
- [x] Claude Code 설치 및 설정
- [x] 토스페이먼츠 MCP 연동
- [x] 기본 쇼핑몰 기능 구현 (상품목록, 상세, 장바구니)
- [x] 결제 페이지 및 위젯 연동
- [x] 결제 승인 로직 구현
- [x] 오류 해결 및 디버깅
- [x] 실제 결제 테스트 완료
- [ ] 빌링키 결제 구현 (향후 과제)
- [ ] 관리자 대시보드 구현 (향후 과제)
- [ ] 보안 강화 (향후 과제)

## 연결된 노트
- [[토스페이먼츠_LLMs_결제연동_가이드]]
- [[Claude Code 완벽 가이드 - 실습형 노트]]
- [[MCP 시스템]]
- [[1인_사업가의_바이브코딩_여정_조쉬의_뉴스레터]]

## 추가 학습 리소스
- **인프런 바이브 코딩 강의**: 관리자 페이지, 복잡한 플랫폼 구현
- **토스페이먼츠 개발자센터**: 공식 API 문서 및 가이드
- **Ruby on Rails 가이드**: Rails 심화 학습
- **Claude Code 공식 문서**: MCP 추가 활용 방법

---

**💡 핵심 인사이트**: 이 가이드는 AI와 MCP의 결합이 어떻게 비개발자도 복잡한 결제 시스템을 구현할 수 있게 하는지 보여줍니다. 특히 토스페이먼츠 MCP를 통해 AI가 실시간으로 최신 API 문서를 참조하여 자동으로 결제 로직을 구현하는 과정이 혁신적입니다.

**⚡ 실무 Tip**: AI 코딩에서 가장 중요한 것은 명확하고 구체적인 문제 설명입니다. 오류 메시지, 예상 동작, 실제 동작을 정확히 설명할수록 AI가 더 정확한 해결책을 제시합니다.