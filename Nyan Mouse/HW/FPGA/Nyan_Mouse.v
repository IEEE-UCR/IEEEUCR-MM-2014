module Nyan_Mouse (





);
    nyan_mouse u0 (
        .clk_clk                                  (<connected-to-clk_clk>),                                  //                               clk.clk
        .pio_0_external_connection_in_port        (<connected-to-pio_0_external_connection_in_port>),        //         pio_0_external_connection.in_port
        .pio_0_external_connection_out_port       (<connected-to-pio_0_external_connection_out_port>),       //                                  .out_port
        .uart_0_external_connection_rxd           (<connected-to-uart_0_external_connection_rxd>),           //        uart_0_external_connection.rxd
        .uart_0_external_connection_txd           (<connected-to-uart_0_external_connection_txd>),           //                                  .txd
        .adc_spi_MISO                             (<connected-to-adc_spi_MISO>),                             //                           adc_spi.MISO
        .adc_spi_MOSI                             (<connected-to-adc_spi_MOSI>),                             //                                  .MOSI
        .adc_spi_SCLK                             (<connected-to-adc_spi_SCLK>),                             //                                  .SCLK
        .adc_spi_SS_n                             (<connected-to-adc_spi_SS_n>),                             //                                  .SS_n
        .encoder_in_external_connection_export    (<connected-to-encoder_in_external_connection_export>),    //    encoder_in_external_connection.export
        .motor_control_external_connection_export (<connected-to-motor_control_external_connection_export>)  // motor_control_external_connection.export
    );

endmodule