'use client'

import { useEffect } from 'react'

export function ClientScripts() {
    useEffect(() => {
        // Header shrink on scroll
        const header = document.querySelector('.header')
        const handleScroll = () => {
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('header-scrolled')
                } else {
                    header.classList.remove('header-scrolled')
                }
            }
        }
        window.addEventListener('scroll', handleScroll)

        // Smooth scroll for anchor links
        const anchors = document.querySelectorAll('a[href^="#"]')
        anchors.forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()
                const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
                if (href) {
                    const target = document.querySelector(href)
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })
                    }
                }
            })
        })

        // Form submission handler - AJAX to stay on page
        const form = document.getElementById('contact-form') as HTMLFormElement | null
        const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null
        const successDiv = document.getElementById('form-success')

        if (form && submitBtn && successDiv) {
            form.addEventListener('submit', function (e) {
                e.preventDefault()

                // Show loading state
                submitBtn.textContent = 'Sending...'
                submitBtn.disabled = true

                // Submit via AJAX
                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        Accept: 'application/json',
                    },
                })
                    .then((response) => {
                        if (response.ok) {
                            // Hide form, show success
                            form.style.display = 'none'
                            successDiv.style.display = 'block'
                        } else {
                            throw new Error('Form submission failed')
                        }
                    })
                    .catch(() => {
                        submitBtn.textContent = 'Get Your Free Mockup'
                        submitBtn.disabled = false
                        alert('Something went wrong. Please email us directly at hello@wolfestudios.co')
                    })
            })
        }

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return null
}
