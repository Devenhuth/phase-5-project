class ItemsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Item.all
    end

    def show
        item = find_item
        render json: item
    end

private

    def find_item
       item = Item.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "Item not found"}
    end

end
