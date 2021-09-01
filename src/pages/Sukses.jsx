import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Sukses extends Component {
    render() {
        return (
            <div className="mt-4 text-center">
                <Image src="assets/images/sukses.png" width="400" />
                <h2>Sukses</h2>
                <p>Terimakasih sudah memesan!</p>
                <Button variant="danger" as={Link} to="/">
                    Kembali
                </Button>
            </div>
        )
    }
}
