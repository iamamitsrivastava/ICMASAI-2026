'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Car, Wifi, Utensils, Accessibility, Bus, Projector, Download, Navigation, Share, Expand } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'

export default function Venue() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  const venueImages = [
    {
      src: '/assets/front_gate.webp',
      alt: 'Parul University Main Gate',
      title: 'Main Gate'
    },
    {
      src: '/assets/pu_admin_side.webp',
      alt: 'Admin Side',
      title: 'Admin Side'
    },
    {
      src: '/assets/ilovepu.webp',
      alt: 'I Love PU',
      title: 'I Love PU'
    }
  ]

  const facilities = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Free high-speed internet throughout the venue',
      details: 'Enterprise-grade WiFi with 24/7 technical support and backup connections.'
    },
    {
      icon: Projector,
      title: 'Modern AV Equipment',
      description: 'State-of-the-art audio-visual systems',
      details: 'Professional projectors, sound systems, and recording facilities in all halls.'
    },
    {
      icon: Utensils,
      title: 'Catering Services',
      description: 'Professional catering and dining facilities',
      details: 'Multiple dining options including vegetarian, vegan, and international cuisine.'
    },
    {
      icon: Car,
      title: 'Ample Parking',
      description: 'Secure parking for 500+ vehicles',
      details: 'Covered and open parking areas with 24/7 security surveillance.'
    },
    {
      icon: Accessibility,
      title: 'Accessibility',
      description: 'Fully accessible for people with disabilities',
      details: 'Wheelchair ramps, accessible restrooms, and dedicated seating areas.'
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Easy access via multiple transport options',
      details: 'Direct bus routes, taxi services, and shuttle arrangements available.'
    }
  ]

  const handleFeatureClick = (featureTitle: string) => {
    const feature = facilities.find(f => f.title === featureTitle)
    if (feature) {
      // alert(`${feature.title}: ${feature.details}`)
    }
  }

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/maps?q=Parul+University+Vadodara', '_blank')
  }

  const openAppleMaps = () => {
    window.open('https://maps.apple.com/?q=Parul+University+Vadodara', '_blank')
  }

  const shareLocation = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ICQTDBT 2026 Conference Venue',
        text: 'Parul University, Vadodara',
        url: 'https://maps.google.com/maps?q=Parul+University+Vadodara'
      })
    } else {
      navigator.clipboard.writeText('Parul University, PO Limda, Vadodara, Gujarat 391760, India')
      alert('Location copied to clipboard!')
    }
  }

  const downloadVenueGuide = () => {
    // Placeholder for venue guide download
    alert('Venue guide download will be available soon!')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
              Conference Venue
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Parul University Campus, Vadodara
            </p>
          </div>
        </div>
      </section>

      {/* Main Venue Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <Image
                  src={venueImages[selectedImage].src}
                  alt={venueImages[selectedImage].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/90 hover:bg-white"
                  >
                    <Expand className="w-4 h-4 mr-2" />
                    View Gallery
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {venueImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary shadow-lg'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Venue Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Parul University Conference Center</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="space-y-3">
                        <p className="font-medium text-lg">Conference Address</p>
                        <p className="text-muted-foreground">
                          Parul University, PO Limda, Vadodara, Gujarat 391760, India
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>+91 123 456 7890</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>test@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow"
                  onClick={() => setIsMapModalOpen(true)}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
                <Button variant="outline" onClick={openGoogleMaps}>
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
                <Button variant="outline" onClick={downloadVenueGuide}>
                  <Download className="w-4 h-4 mr-2" />
                  Venue Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Venue Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our conference venue is equipped with modern facilities to ensure a comfortable and productive experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all cursor-pointer group hover:scale-105"
                onClick={() => handleFeatureClick(facility.title)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                    <facility.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{facility.description}</p>
                  <span className="text-xs text-primary font-medium group-hover:underline">
                    Click for details
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Modal */}
      <Dialog open={isMapModalOpen} onOpenChange={setIsMapModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Conference Location</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7173104615913!2d73.3634204!3d22.2886958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1758734374591!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button variant="outline" onClick={openGoogleMaps} className="w-full">
                <MapPin className="w-4 h-4 mr-2" />
                Open in Google Maps
              </Button>
              <Button variant="outline" onClick={openAppleMaps} className="w-full">
                <MapPin className="w-4 h-4 mr-2" />
                Open in Apple Maps
              </Button>
              <Button variant="outline" onClick={shareLocation} className="w-full">
                <Share className="w-4 h-4 mr-2" />
                Share Location
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}