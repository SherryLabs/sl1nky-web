import { type Metadata } from '@/sherries/metadata'

export const metadata: Metadata[] = [
  {
    type: 'action',
    icon: 'https://plus.unsplash.com/premium_vector-1720931652710-7bfbe41ae29a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Secure Transaction',
    description: 'Ensure all your transactions are encrypted and safe.',
    label: 'Security',
    links: {
      actions: [
        {
          type: 'blockchain-write',
          label: 'Sign Transaction',
          href: '/transactions/sign'
        },
        {
          type: 'blockchain-write',
          label: 'Verify Identity',
          href: '/identity/verify'
        }
      ]
    },
    disabled: false
  },
  {
    type: 'action',
    icon: 'https://plus.unsplash.com/premium_vector-1719933451135-2e669cc24fca?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Real Estate Deals',
    description: 'Access the latest trusted real estate opportunities.',
    label: 'Opportunities',
    links: {
      actions: [
        {
          type: 'blockchain-read',
          label: 'View Properties',
          href: '/properties/view'
        },
        {
          type: 'blockchain-read',
          label: 'Track Investments',
          href: '/investments/track'
        }
      ]
    },
    disabled: false
  },
  {
    type: 'action',
    icon: 'https://plus.unsplash.com/premium_vector-1683134555174-6a149b8c4c37?q=80&w=1316&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Build Trust',
    description: 'Improve your trust score to access better deals.',
    label: 'Trust',
    links: {
      actions: [
        {
          type: 'blockchain-read',
          label: 'Check Score',
          href: '/trust/score'
        },
        {
          type: 'blockchain-write',
          label: 'Increase Score',
          href: '/trust/increase'
        }
      ]
    },
    disabled: true
  },
  {
    type: 'action',
    icon: 'https://plus.unsplash.com/premium_vector-1683141323401-9d48aa8daea1?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ownership Verification',
    description: 'Verify the ownership of real estate properties instantly.',
    label: 'Verification',
    links: {
      actions: [
        {
          type: 'blockchain-read',
          label: 'Verify Ownership',
          href: '/ownership/verify'
        },
        {
          type: 'blockchain-read',
          label: 'View Ownership History',
          href: '/ownership/history'
        },
        {
          type: 'blockchain-write',
          label: 'Transfer Ownership',
          href: '/ownership/transfer'
        }
      ]
    },
    disabled: false
  }
]
