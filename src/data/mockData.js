export const CATEGORIES = [
  "All Tracks",
  "Quantitative Finance & HFT",
  "Deep Probability & Stochastics",
  "Linear Algebra & AI Foundations",
  "Algorithmic Game Theory",
  "GATE DA & CS Quant",
  "CAT 99th Percentile Quant",
  "High-Performance C++"
];

export const EXPLORE_TRACKS = [
  {
    id: "track-1",
    title: "Algorithmic Market Making & Order Book Dynamics",
    description: "Master limit order books, Avellaneda-Stoikov inventory models, microstructure alpha, and latency-critical execution strategies tailored for Indian and global equities.",
    category: "Quantitative Finance & HFT",
    difficulty: "Advanced",
    duration: "14 Weeks • 64 Modules",
    enrolledCount: 14200,
    rating: 4.94,
    author: {
      name: "Dr. Vikramaditya Rao",
      role: "Ex-Managing Director, High-Frequency Trading & IIT Madras Alum",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    tags: ["Market Microstructure", "C++20", "Stochastic Control", "NSE Order Feed"],
    completedPercent: 62,
    badge: "Most Popular in Bharat"
  },
  {
    id: "track-2",
    title: "Stochastic Calculus & Derivative Asset Pricing",
    description: "Rigorous measure-theoretic probability, Brownian motion, Itô’s lemma, Girsanov theorem, and numerical PDE methods for complex volatility surfaces.",
    category: "Deep Probability & Stochastics",
    difficulty: "Hardcore / Olympiad",
    duration: "12 Weeks • 52 Modules",
    enrolledCount: 9800,
    rating: 4.96,
    author: {
      name: "Prof. Ananya Sen",
      role: "Chair of Mathematical Sciences, IISc Bengaluru",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    tags: ["Itô Calculus", "Black-Scholes", "Martingales", "Jump-Diffusion"],
    completedPercent: 35,
    badge: "Premier IISc Track"
  },
  {
    id: "track-3",
    title: "Spectral Graph Theory & High-Dimensional Linear Algebra for AI",
    description: "Singular Value Decomposition (SVD), random matrix theory, Perron-Frobenius theorem, and graph Laplacians behind frontier transformer architectures and embeddings.",
    category: "Linear Algebra & AI Foundations",
    difficulty: "Advanced",
    duration: "10 Weeks • 40 Modules",
    enrolledCount: 18500,
    rating: 4.91,
    author: {
      name: "Karan Singhal",
      role: "Principal AI Research Scientist & IIT Bombay Silver Medalist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    tags: ["SVD", "Random Matrices", "Perron-Frobenius", "Graph Laplacians"],
    completedPercent: 80,
    badge: "AI Frontier"
  },
  {
    id: "track-4",
    title: "GATE Data Science & Artificial Intelligence (DA): Mathematical Foundations",
    description: "Complete mastery of Calculus, Probability, Optimization, and Linear Algebra explicitly benchmarked to top 100 All-India GATE DA ranks.",
    category: "GATE DA & CS Quant",
    difficulty: "Intermediate",
    duration: "16 Weeks • 80 Modules",
    enrolledCount: 31200,
    rating: 4.88,
    author: {
      name: "QuantBharat Academic Council",
      role: "Curated by AIR 1-50 GATE DA Rankers",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    tags: ["Convex Optimization", "Bayesian Inference", "Multivariate Calculus"],
    completedPercent: 45,
    badge: "All-India Benchmark"
  },
  {
    id: "track-5",
    title: "CAT Quantitative Aptitude: The 99.9+ Percentile Protocol",
    description: "Unconventional mental models, speed modular arithmetic, coordinate geometry symmetry, Diophantine systems, and combinatorial counting techniques.",
    category: "CAT 99th Percentile Quant",
    difficulty: "Intermediate",
    duration: "8 Weeks • 36 Modules",
    enrolledCount: 42100,
    rating: 4.95,
    author: {
      name: "Rohit Deshmukh",
      role: "3x CAT 100%iler & IIM Ahmedabad Alum",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
    },
    tags: ["Modular Arithmetic", "Geometry", "Combinatorics", "Time Optimization"],
    completedPercent: 15,
    badge: "Top Rated CAT"
  },
  {
    id: "track-6",
    title: "Sub-Microsecond C++23 Architecture for Dalal Street Systems",
    description: "Zero-copy lock-free ring buffers, cache-line alignment, SIMD vectorization, Linux kernel bypass (Solarflare OpenOnload), and custom memory allocators.",
    category: "High-Performance C++",
    difficulty: "Hardcore / Olympiad",
    duration: "14 Weeks • 58 Modules",
    enrolledCount: 7600,
    rating: 4.98,
    author: {
      name: "Siddharth Nambiar",
      role: "Chief Systems Architect, Ultra-Low-Latency Trading",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    tags: ["Lock-Free", "Kernel Bypass", "Cache Optimization", "SIMD AVX-512"],
    completedPercent: 90,
    badge: "Industry Hardcore"
  }
];

export const PRACTICE_QUESTIONS = [
  {
    id: "q-101",
    track: "Quantitative Finance",
    difficulty: "Advanced",
    title: "Delta Hedging Error Under Discrete Rebalancing in Black-Scholes",
    statement: "Consider a European call option governed by standard geometric Brownian motion dS_t = μ S_t dt + σ S_t dW_t. If an option delta-hedge is rebalanced at discrete uniform time intervals Δt rather than continuously, what is the asymptotic variance of the tracking error cumulative P&L?",
    formula: "\\mathbb{E}[\\Pi_T] \\approx \\frac{1}{2} \\sigma^2 \\sum_{k=0}^{N-1} S_{t_k}^2 \\Gamma_{t_k} (\\Delta W_k^2 - \\Delta t)",
    options: [
      { id: "A", text: "Proportional to (Δt)^2 and weighted by the option's Vega (∂C/∂σ)" },
      { id: "B", text: "Proportional to Δt and integrated square of Gamma: (σ²/2) ∫₀ᵀ S_t⁴ Γ_t² dt", isCorrect: true },
      { id: "C", text: "Zero in expectation, with kurtosis converging strictly to 3.0" },
      { id: "D", text: "Exponentially decaying with respect to spot interest rate r · Δt" }
    ],
    explanation: "Under discrete rebalancing interval Δt, the hedging error per interval is approximated by Taylor expansion: e_k ≈ (1/2) S_t² Γ_t ( (ΔS/S)² - σ² Δt ). Since (ΔW)² - Δt has variance 2(Δt)², integrating the expectation over [0, T] yields the classical Boyle & Emanuel (1980) asymptotic variance: Var(Hedging Error) = (σ² / 2) ∫₀ᵀ S_t⁴ Γ_t² dt · Δt.",
    timeLimit: 180,
    points: 45
  },
  {
    id: "q-102",
    track: "Linear Algebra & AI",
    difficulty: "Advanced",
    title: "Singular Value Sensitivity under Low-Rank Perturbation",
    statement: "Let A ∈ ℝ^{m × n} have singular values σ₁ ≥ σ₂ ≥ ... ≥ σ_r > 0. If a rank-1 perturbation ΔA = u vᵀ is added, where ‖u‖₂ = ‖v‖₂ = 1, what are the tightest Weyl inequality bounds on the perturbed singular values σ̃_k(A + ΔA)?",
    formula: "|\\tilde{\\sigma}_k(A + \\Delta A) - \\sigma_k(A)| \\leq \\|\\Delta A\\|_2",
    options: [
      { id: "A", text: "σ_{k-1} ≤ σ̃_k ≤ σ_{k+1}" },
      { id: "B", text: "|σ̃_k - σ_k| ≤ 1, and σ_{k+1} ≤ σ̃_k ≤ σ_{k-1} (Interlacing property)", isCorrect: true },
      { id: "C", text: "σ̃_k = σ_k ± det(u vᵀ)" },
      { id: "D", text: "Strictly invariant if u ⟂ Range(A)" }
    ],
    explanation: "By Mirsky's theorem and Weyl's inequalities for singular values, adding a rank-1 matrix of spectral norm ‖ΔA‖₂ = ‖u‖₂ ‖v‖₂ = 1 satisfies both |σ̃_k - σ_k| ≤ 1 and the Cauchy interlacing property for singular values: σ_{k+1}(A) ≤ σ̃_k(A + ΔA) ≤ σ_{k-1}(A).",
    timeLimit: 150,
    points: 40
  },
  {
    id: "q-103",
    track: "Deep Probability",
    difficulty: "Intermediate",
    title: "Martingale Stopping Time in Gambler's Ruin with Drift",
    statement: "A random walker on ℤ starts at x ∈ (0, a). At each step, it moves right (+1) with probability p and left (-1) with probability q = 1 - p (where p ≠ q). Using the exponential martingale M_n = (q/p)^{S_n}, find the exact probability of hitting 'a' before hitting 0.",
    formula: "M_n = \\left(\\frac{q}{p}\\right)^{S_n} \\implies \\mathbb{E}[M_{\\tau}] = M_0 = \\left(\\frac{q}{p}\\right)^x",
    options: [
      { id: "A", text: "P(Hit a) = [ 1 - (q/p)^x ] / [ 1 - (q/p)^a ]", isCorrect: true },
      { id: "B", text: "P(Hit a) = x / a" },
      { id: "C", text: "P(Hit a) = (p/q)^x / [ 1 + (p/q)^a ]" },
      { id: "D", text: "P(Hit a) = (q/p)^{a - x}" }
    ],
    explanation: "Because M_n is a bounded martingale up to the stopping time τ = inf{n : S_n ∈ {0, a}}, Doob's Optional Stopping Theorem states E[M_τ] = M_0. Thus P(S_τ = a)(q/p)^a + (1 - P(S_τ = a))(q/p)^0 = (q/p)^x. Solving for P(S_τ = a) directly yields [ 1 - (q/p)^x ] / [ 1 - (q/p)^a ].",
    timeLimit: 120,
    points: 35
  },
  {
    id: "q-104",
    track: "CAT 99th Quant",
    difficulty: "Intermediate",
    title: "Diophantine Sieve and Modular Inverses",
    statement: "Find the remainder when 37^{2026} is divided by 100. In other words, determine the last two decimal digits of 37^{2026}.",
    formula: "37^{2026} \\equiv ? \\pmod{100}",
    options: [
      { id: "A", text: "49" },
      { id: "B", text: "69", isCorrect: true },
      { id: "C", text: "21" },
      { id: "D", text: "89" }
    ],
    explanation: "Euler's totient φ(100) = 100 · (1 - 1/2) · (1 - 1/5) = 40. Since gcd(37, 100) = 1, by Euler's Totient Theorem, 37^40 ≡ 1 (mod 100). Thus 2026 = 40 · 50 + 26, so 37^{2026} ≡ 37^{26} (mod 100). Notice 37² = 1369 ≡ 69 ≡ -31 (mod 100). Then 37⁴ ≡ (-31)² = 961 ≡ -39 (mod 100). Continuing modular exponentiation leads systematically to 69.",
    timeLimit: 90,
    points: 30
  }
];

export const WORKSPACE_PROBLEMS = [
  {
    id: "qb-ws-1",
    title: "Order Book Matching Engine & Limit Order Queue Simulator",
    difficulty: "Advanced",
    category: "High-Performance Systems & HFT",
    description: "Design an in-memory limit order book matching engine that processes continuous bids and asks. The book must support price-time priority (FIFO within price level), maintain best bid and ask (BBO), and execute market orders against the resting liquidity pool with minimum memory allocation overhead.",
    mathEquation: "\\text{Spread} = P_{\\text{best ask}} - P_{\\text{best bid}} \\quad \\text{subject to } P_{\\text{bid}} < P_{\\text{ask}}",
    constraints: [
      "Order processing time must be O(1) for best level execution and O(log K) for insertion into price ladder",
      "Maximum orders in memory: 1,000,000",
      "Support price precision of 2 decimal places (use integer ticks to avoid float rounding)"
    ],
    starterCode: {
      python: `# QuantBharat High-Frequency Workspace
# Order Book Matching Engine Simulator (Tick Precision)

from collections import deque
from dataclasses import dataclass
from typing import Dict, List, Optional

@dataclass
class Order:
    order_id: int
    is_buy: bool
    price: int # Price in paise (ticks)
    quantity: int
    timestamp: int

class OrderBook:
    def __init__(self):
        self.bids: Dict[int, deque] = {} # price -> queue of orders
        self.asks: Dict[int, deque] = {}
        self.best_bid: Optional[int] = None
        self.best_ask: Optional[int] = None

    def add_limit_order(self, order: Order) -> List[dict]:
        trades = []
        # Implement price-time priority execution
        # Fill existing orders if crossing spread
        if order.is_buy:
            while self.best_ask is not None and order.price >= self.best_ask and order.quantity > 0:
                ask_queue = self.asks[self.best_ask]
                resting = ask_queue[0]
                matched_qty = min(order.quantity, resting.quantity)
                trades.append({
                    "trade_price": self.best_ask,
                    "qty": matched_qty,
                    "buy_id": order.order_id,
                    "sell_id": resting.order_id
                })
                order.quantity -= matched_qty
                resting.quantity -= matched_qty
                if resting.quantity == 0:
                    ask_queue.popleft()
                    if not ask_queue:
                        del self.asks[self.best_ask]
                        self.best_ask = min(self.asks.keys()) if self.asks else None
            
            if order.quantity > 0:
                if order.price not in self.bids:
                    self.bids[order.price] = deque()
                self.bids[order.price].append(order)
                if self.best_bid is None or order.price > self.best_bid:
                    self.best_bid = order.price

        return trades

# Test suite initialization
book = OrderBook()
# Add resting sell orders: 100 shares @ 2450.50 (245050 paise)
book.add_limit_order(Order(1, False, 245050, 100, 10001))
book.add_limit_order(Order(2, False, 245075, 200, 10002))

# Incoming aggressive buy order: 150 shares @ 2450.75
executed_trades = book.add_limit_order(Order(3, True, 245075, 150, 10003))
print("Matched Trades:", executed_trades)
print(f"Spread post execution: Best Bid = {book.best_bid}, Best Ask = {book.best_ask}")
`,
      cpp: `// QuantBharat Sub-Microsecond C++20 OrderBook
#include <iostream>
#include <map>
#include <vector>
#include <cstdint>

struct Order {
    uint64_t id;
    bool is_buy;
    int64_t price_ticks; // Price in integer ticks
    uint32_t quantity;
};

class OrderBookFast {
public:
    void process_limit(const Order& order) {
        std::cout << "[QuantBharat C++ Engine] Processing order ID " << order.id << std::endl;
    }
};

int main() {
    OrderBookFast engine;
    engine.process_limit({1, true, 245050, 100});
    std::cout << "Engine initialized. Zero-copy ring buffer ready.\\n";
    return 0;
}
`
    },
    sampleTestCases: [
      { input: "Add Limit: Sell 100 @ 2450.50, Buy 150 @ 2450.75", output: "Trade 1: 100 @ 2450.50, Remaining Buy: 50 @ 2450.75 resting", status: "Passed" },
      { input: "Non-crossing Bids: Buy 50 @ 2449.00", output: "Best Bid updated to 2449.00", status: "Passed" },
      { input: "FIFO Priority check at same tick level", output: "Order 1 completely filled before Order 2", status: "Passed" }
    ]
  },
  {
    id: "qb-ws-2",
    title: "Black-Scholes Volatility Surface & Greeks Vectorizer",
    difficulty: "Advanced",
    category: "Quantitative Finance",
    description: "Implement a vectorized calculation of option Greeks (Delta, Gamma, Vega, Theta, Rho) with numerical root-finding (Newton-Raphson / Brent's method) to invert market prices into Implied Volatility curves across Indian NIFTY/BANKNIFTY option chains.",
    mathEquation: "d_1 = \\frac{\\ln(S/K) + (r + \\sigma^2/2)T}{\\sigma \\sqrt{T}}, \\quad \\Gamma = \\frac{\\phi(d_1)}{S \\sigma \\sqrt{T}}",
    constraints: [
      "Vectorized calculation across 10,000 strikes in < 5ms",
      "Handle deep in-the-money and out-of-the-money numerical boundary stability"
    ],
    starterCode: {
      python: `import math

def normal_cdf(x):
    return (1.0 + math.erf(x / math.sqrt(2.0))) / 2.0

def black_scholes_call_greeks(S, K, T, r, sigma):
    d1 = (math.log(S / K) + (r + 0.5 * sigma**2) * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    
    phi_d1 = (1.0 / math.sqrt(2.0 * math.pi)) * math.exp(-0.5 * d1**2)
    delta = normal_cdf(d1)
    gamma = phi_d1 / (S * sigma * math.sqrt(T))
    vega = S * phi_d1 * math.sqrt(T)
    
    return {"Delta": round(delta, 4), "Gamma": round(gamma, 6), "Vega": round(vega, 4)}

# Benchmark for NIFTY Index: Spot = 24500, Strike = 24500, T = 15/365, r = 6.5%, IV = 14%
greeks = black_scholes_call_greeks(24500, 24500, 15/365, 0.065, 0.14)
print("NIFTY At-The-Money Call Greeks:", greeks)
`
    },
    sampleTestCases: [
      { input: "S=24500, K=24500, T=0.041, r=0.065, sigma=0.14", output: "Delta: 0.518, Gamma: 0.00057, Vega: 49.32", status: "Passed" }
    ]
  }
];

export const LEADERBOARD_USERS = [
  {
    rank: 1,
    name: "Devendra Kulkarni",
    username: "dev_quant_iitb",
    institution: "IIT Bombay (Computer Science & Microstructure Lab)",
    rating: 2410,
    solved: 382,
    streak: 64,
    tier: "Quant Grandmaster",
    country: "Bharat",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    badge: "AIR 1 Global"
  },
  {
    rank: 2,
    name: "Dr. Shruti Sundaram",
    username: "shruti_stochastics",
    institution: "IISc Bengaluru (Department of Mathematics)",
    rating: 2385,
    solved: 349,
    streak: 52,
    tier: "Quant Grandmaster",
    country: "Bharat",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    badge: "AIR 2 Global"
  },
  {
    rank: 3,
    name: "Raghav Mehra",
    username: "raghav_hft",
    institution: "IIT Delhi (Quantitative Systems Research)",
    rating: 2315,
    solved: 310,
    streak: 41,
    tier: "Quant Master",
    country: "Bharat",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    badge: "AIR 3 Global"
  },
  {
    rank: 4,
    name: "Pooja Venkataraman",
    username: "pooja_gate_quant",
    institution: "IIT Madras / GATE DA AIR 3",
    rating: 2260,
    solved: 295,
    streak: 38,
    tier: "Quant Master",
    country: "Bharat",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    badge: "Top GATE DA"
  },
  {
    rank: 5,
    name: "Aditya Vardhan",
    username: "aditya_opt",
    institution: "BITS Pilani (Algorithmic Trading Cell)",
    rating: 2190,
    solved: 278,
    streak: 30,
    tier: "Quant Master",
    country: "Bharat",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    badge: "BITS Leader"
  },
  {
    rank: 14,
    name: "Arjun Sharma (You)",
    username: "arjun_quant",
    institution: "IIT Madras (Department of Data Science & AI)",
    rating: 1842,
    solved: 142,
    streak: 18,
    tier: "Bharat Diamond",
    country: "Bharat",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    badge: "Top 2.4% Bharat",
    isCurrentUser: true
  }
];

export const COMMUNITY_POSTS = [
  {
    id: "post-1",
    author: {
      name: "Dr. Vikramaditya Rao",
      username: "vikram_hft",
      institution: "IIT Madras Alum • Ex-Quant MD",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      verified: true
    },
    title: "Optimizing C++20 Ring Buffers for NSE Tick Data: Cache Miss Analysis on AMD EPYC",
    preview: "When reading the NSE multi-cast feed over UDP with kernel bypass (Solarflare EF_VI), false sharing on multi-threaded ring buffers causes a 320ns latency penalty. Here is how we padded cache lines to 64 bytes and structured lock-free single-producer single-consumer queues...",
    tags: ["High-Performance C++", "NSE Market Feed", "Low Latency", "Microstructure"],
    likes: 342,
    comments: 48,
    views: 4890,
    timestamp: "2 hours ago",
    featured: true
  },
  {
    id: "post-2",
    author: {
      name: "Priya Chandrashekhar",
      username: "priya_stoch",
      institution: "IISc Mathematics Dept",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      verified: true
    },
    title: "Why Black-Scholes Delta Hedging Fails on Indian Expiry Thursdays & What Models Fix It",
    preview: "Indian weekly options expiry (Thursday NIFTY/SENSEX) exhibits extreme implied volatility skew steepening and pin risk. We simulated 3 years of intraday tick data with Heston Stochastic Volatility + Merton Jump Diffusion...",
    tags: ["Quantitative Finance", "Options Expiry", "Stochastic Volatility", "NIFTY Greeks"],
    likes: 289,
    comments: 34,
    views: 3410,
    timestamp: "5 hours ago"
  },
  {
    id: "post-3",
    author: {
      name: "Karan Singhal",
      username: "karan_gate_ai",
      institution: "IIT Bombay AI Fellow",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      verified: true
    },
    title: "GATE Data Science (DA) 2026: Mathematical Proofs You Must Not Skip",
    preview: "A comprehensive breakdown of Positive Semi-Definite (PSD) matrix properties, Karush-Kuhn-Tucker (KKT) conditions in Support Vector Machines, and expectation-maximization convergence guarantees.",
    tags: ["GATE DA", "Linear Algebra", "Optimization", "IIT Preparation"],
    likes: 512,
    comments: 87,
    views: 7120,
    timestamp: "1 day ago"
  },
  {
    id: "post-4",
    author: {
      name: "Rohit Deshmukh",
      username: "rohit_cat100",
      institution: "IIM Ahmedabad Alum",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
      verified: true
    },
    title: "Mental Shortcuts for High-Power Modular Arithmetic in CAT 99.9%ile Quant",
    preview: "Forget brute force binomial expansions. Learn how Carmichael function λ(n) and Hensel's Lemma allow you to solve 3-digit remainder problems in under 30 seconds with clean mental factorization.",
    tags: ["CAT Quant", "Number Theory", "Speed Math", "Aptitude"],
    likes: 418,
    comments: 52,
    views: 5200,
    timestamp: "2 days ago"
  }
];

export const FAQS = [
  {
    category: "Platform & Vision",
    q: "What makes QuantBharat fundamentally different from generic coding or test platforms?",
    a: "QuantBharat is engineered specifically for deep quantitative computing, mathematical rigor, and Indian high-tech standards. Rather than basic CRUD or generic algorithm puzzles, our modules focus on high-frequency trading mathematics, stochastic differential equations, GATE DA/CS rigorous proofs, and low-latency C++ systems directly calibrated against India's leading research labs (IISc, IITs) and top trading institutions."
  },
  {
    category: "Platform & Vision",
    q: "Is QuantBharat aligned with Indian competitive benchmarks (GATE, CAT, IITs, Indian FinTech)?",
    a: "Yes. Every problem track has dedicated alignment with Indian benchmarks — including GATE Data Science & AI, CAT 99th percentile quantitative aptitude, National Mathematics Olympiads, and Dalal Street quantitative finance / algorithmic trading standards."
  },
  {
    category: "Practice & Workspace",
    q: "How does the QuantBharat Workspace execute code and formulas?",
    a: "Our workspace includes interactive support for Python 3.12, C++20, and computational numerical models. You can test your code against multi-stage unit tests, measure execution latency, inspect memory allocations, and view formatted mathematical equations alongside test output."
  },
  {
    category: "Practice & Workspace",
    q: "Are the practice test scores benchmarked against all-India peers?",
    a: "Yes. Our percentile engine compares your accuracy, speed, and mathematical consistency against more than 120,000 active students and professionals across Bharat, providing granular percentile metrics and topic-wise diagnostic breakdowns."
  },
  {
    category: "Account & Community",
    q: "Can college clubs, IIT research cells, or trading desks create institutional groups?",
    a: "Absolutely. Under the Leaderboard and Community sections, institutional leagues exist for IITs, NITs, BITS, IIMs, and corporate trading firms to host private hackathons and track collective progress."
  },
  {
    category: "Technical",
    q: "What browser and hardware requirements does QuantBharat have?",
    a: "QuantBharat is built on modern web standards with GPU-accelerated SVG visualization, zero unnecessary heavy libraries, and instant keyboard shortcuts (Cmd/Ctrl + K). It works smoothly on any modern desktop, laptop, tablet, or smartphone."
  }
];
