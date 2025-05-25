import React from 'react';
import { Server, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';
import FadeIn from './ui/FadeIn';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Take control of your
                <span className="text-blue-600"> digital life</span>
              </h1>
            
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Open source solutions that empower you to host your own services, protect your data, and break free from cloud dependency.
              </p>
            
              <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% open source</span>
                
                <svg className="ml-4 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Privacy-focused</span>
                
                <svg className="ml-4 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No tracking</span>
              </div>
          </div>
          
          <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <div className="absolute -left-8 -top-8 -right-8 -bottom-8 bg-blue-50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white border border-slate-200 rounded-xl shadow-lg p-6 overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="h-5 w-5 text-blue-600" />
                    <span className="font-mono text-sm">localhost:3000</span>
                  </div>
                  <div className="font-mono text-xs text-slate-700 bg-slate-50 p-4 rounded border border-slate-200">
                    <p className="mb-1"><span className="text-blue-600">$</span> docker run -d \</p>
                    <p className="mb-1 ml-4">--name localhost-app \</p>
                    <p className="mb-1 ml-4">-p 3000:3000 \</p>
                    <p className="mb-1 ml-4">localhost-labs/app:latest</p>
                    <p className="mt-3 text-green-600">✓ Container started successfully</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
