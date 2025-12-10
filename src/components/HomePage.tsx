import { Card } from './ui/card';
import { Button } from './ui/button';
import { Receipt, Users, Calculator, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onStartSplitting: () => void;
}

export function HomePage({ onStartSplitting }: HomePageProps) {
  const features = [
    {
      icon: Users,
      title: 'Multiple People',
      description: 'Add unlimited friends to split the bill with',
    },
    {
      icon: Calculator,
      title: 'Automatic Calculation',
      description: 'Instantly calculates how much each person owes',
    },
    {
      icon: DollarSign,
      title: 'Tax & Tip',
      description: 'Optional customizable tax and tip percentages',
    },
    {
      icon: CheckCircle,
      title: 'Settlement Summary',
      description: 'Shows exactly who needs to pay whom',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full mb-6">
            <Receipt className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-indigo-900 mb-4">Split Bill</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The easiest way to split bills with friends. No more complicated calculations or awkward conversations about who owes what.
          </p>
          <Button onClick={onStartSplitting} size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            Start Splitting Bills
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <Card className="p-8 mb-16">
          <h2 className="text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full mb-4">
                1
              </div>
              <h3 className="mb-2">Enter Bill Amount</h3>
              <p className="text-gray-600 text-sm">
                Input the total bill amount in IDR and optionally add tax or tip
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full mb-4">
                2
              </div>
              <h3 className="mb-2">Add People</h3>
              <p className="text-gray-600 text-sm">
                Add your friends and enter how much each person paid
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full mb-4">
                3
              </div>
              <h3 className="mb-2">Get Settlement</h3>
              <p className="text-gray-600 text-sm">
                See who owes whom and the exact amounts to settle up
              </p>
            </div>
          </div>
        </Card>

        {/* Features List */}
        <Card className="p-8 bg-white">
          <h2 className="mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span>IDR Currency Format</span>
                <p className="text-sm text-gray-600">
                  Formatted for Indonesian Rupiah with proper thousand separators
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span>Customizable Tax</span>
                <p className="text-sm text-gray-600">
                  Add tax as a percentage of the bill amount
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span>Optional Tip</span>
                <p className="text-sm text-gray-600">
                  Include gratuity when needed with custom percentages
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span>Smart Settlement</span>
                <p className="text-sm text-gray-600">
                  Automatically calculates the minimal number of transactions needed
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span>Real-time Balance</span>
                <p className="text-sm text-gray-600">
                  See each person's balance update as you enter amounts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span>Mobile Friendly</span>
                <p className="text-sm text-gray-600">
                  Works perfectly on all devices and screen sizes
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12 mb-8">
          <Button onClick={onStartSplitting} size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}